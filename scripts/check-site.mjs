import { access, readdir, readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const errors = [];

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    if ([".git", "_site"].includes(entry.name)) {
      continue;
    }
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await walk(fullPath)));
    } else {
      files.push(fullPath);
    }
  }
  return files;
}

function lineNumber(source, index) {
  return source.slice(0, index).split("\n").length;
}

function report(file, source, index, message) {
  errors.push(
    `${path.relative(root, file)}:${lineNumber(source, index)} ${message}`,
  );
}

async function pathExists(target) {
  try {
    await access(target);
    return true;
  } catch (error) {
    return false;
  }
}

function localTarget(file, reference) {
  const cleanReference = reference.split("#")[0].split("?")[0];
  if (!cleanReference || /^(?:[a-z]+:|\/\/)/i.test(cleanReference)) {
    return null;
  }

  let decoded;
  try {
    decoded = decodeURIComponent(cleanReference);
  } catch (error) {
    return { invalid: true };
  }

  if (decoded.startsWith("/")) {
    return path.resolve(root, `.${decoded}`);
  }
  return path.resolve(path.dirname(file), decoded);
}

function requireMatch(file, source, pattern, message) {
  if (!pattern.test(source)) {
    report(file, source, 0, message);
  }
}

const files = await walk(root);
const htmlFiles = files.filter((file) => file.endsWith(".html"));
for (const file of htmlFiles) {
  const source = await readFile(file, "utf8");

  const ids = new Map();
  for (const match of source.matchAll(/\bid\s*=\s*["']([^"']+)["']/gi)) {
    if (ids.has(match[1])) {
      report(file, source, match.index, `duplicate id \"${match[1]}\"`);
    }
    ids.set(match[1], match.index);
  }

  if (/\bonclick\s*=/i.test(source)) {
    report(
      file,
      source,
      source.search(/\bonclick\s*=/i),
      "inline onclick handler is not allowed",
    );
  }

  for (const match of source.matchAll(
    /\b(?:href|src)\s*=\s*["']([^"']+)["']/gi,
  )) {
    if (/^\/(?!\/)/.test(match[1])) {
      report(
        file,
        source,
        match.index,
        `root-relative reference does not work when opened directly: "${match[1]}"`,
      );
    }
    const target = localTarget(file, match[1]);
    if (target?.invalid) {
      report(
        file,
        source,
        match.index,
        `invalid encoded reference \"${match[1]}\"`,
      );
    } else if (target && !(await pathExists(target))) {
      report(file, source, match.index, `missing local target \"${match[1]}\"`);
    }
  }

  requireMatch(
    file,
    source,
    /<meta\s+name=["']viewport["']/i,
    "missing viewport metadata",
  );
  requireMatch(file, source, /<main\b/i, "missing main landmark");
  requireMatch(file, source, /class=["'][^"']*skip-link/i, "missing skip link");
  requireMatch(
    file,
    source,
    /id=["']site-header["']/i,
    "missing site header slot",
  );
  requireMatch(
    file,
    source,
    /id=["']site-footer["']/i,
    "missing site footer slot",
  );
  requireMatch(
    file,
    source,
    /src=["'][^"']*scripts\/i18n\.js["']/i,
    "missing i18n script",
  );
  requireMatch(
    file,
    source,
    /src=["'][^"']*scripts\/site\.js["']/i,
    "missing site script",
  );
  requireMatch(file, source, /<h1\b/i, "missing page h1");
  if (!/<meta\s+name=["']robots["'][^>]+noindex/i.test(source)) {
    requireMatch(
      file,
      source,
      /<meta\s+name=["']description["']/i,
      "missing description metadata",
    );
    requireMatch(
      file,
      source,
      /<link\s+rel=["']canonical["']/i,
      "missing canonical URL",
    );
  }
}

if (errors.length) {
  console.error(errors.join("\n"));
  process.exitCode = 1;
} else {
  console.log(
    `Validated ${htmlFiles.length} HTML files and their local references.`,
  );
}
