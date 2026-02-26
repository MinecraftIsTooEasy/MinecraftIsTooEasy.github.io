function parseMarkdown(md) {
    let html = md;
    
    html = html.replace(/^### (.*$)/gm, '<h3>$1</h3>');
    html = html.replace(/^## (.*$)/gm, '<h2>$1</h2>');
    html = html.replace(/^# (.*$)/gm, '<h1>$1</h1>');
    
    html = html.replace(/^---$/gm, '<hr>');
    
    html = html.replace(/```([\s\S]*?)```/g, function(match, code) {
        return '<pre><code>' + code.replace(/\n/g, '') + '</code></pre>';
    });
    
    html = html.replace(/\*\*\*(.*?)\*\*\*/g, '<strong><em>$1</em></strong>');
    html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');
    html = html.replace(/`(.*?)`/g, '<code>$1</code>');
    
    html = html.replace(/^> (.*$)/gm, '<blockquote>$1</blockquote>');
    
    html = html.replace(/\[([^\]]*)\]\(([^)]*)\)/g, '<a href="$2">$1</a>');
    
    html = html.replace(/\n\n/g, '</p><p>');
    html = html.replace(/^(?!<[ph][1-6]>|<blockquote>|<pre>|<ul>|<ol>|<li>)(.*)$/gm, function(match, p1) {
        if (p1.trim()) {
            return '<p>' + p1 + '</p>';
        }
        return match;
    });
    
    html = html.replace(/^- (.*$)/gm, '<li>$1</li>');
    html = html.replace(/(<li>.*<\/li>)/s, '<ul>$1</ul>');
    
    return html;
}

async function loadMarkdownDoc(path) {
    try {
        const response = await fetch(path);
        if (!response.ok) throw new Error('Document not found');
        const md = await response.text();
        return parseMarkdown(md);
    } catch (error) {
        console.error('Error loading markdown:', error);
        return `<p>Error loading document: ${error.message}</p>`;
    }
}
