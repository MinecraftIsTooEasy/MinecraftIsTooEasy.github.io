(function () {
    "use strict";

    function initializeTableSort() {
        const table = document.getElementById("mod-table");
        const body = table?.tBodies[0];
        if (!table || !body) {
            return;
        }

        const originalRows = Array.from(body.rows);
        let activeColumn = -1;
        let direction = "none";

        function updateHeaders() {
            table.querySelectorAll("th").forEach((header, index) => {
                const indicator = header.querySelector(".sort-indicator");
                const isActive = index === activeColumn;
                const headerDirection = isActive ? direction : "none";
                header.setAttribute("aria-sort", headerDirection);
                if (indicator) {
                    indicator.textContent = headerDirection === "ascending"
                        ? "▲"
                        : headerDirection === "descending" ? "▼" : "↕";
                }
            });
        }

        function sortByColumn(columnIndex) {
            if (activeColumn !== columnIndex) {
                activeColumn = columnIndex;
                direction = "ascending";
            } else if (direction === "ascending") {
                direction = "descending";
            } else if (direction === "descending") {
                direction = "none";
            } else {
                direction = "ascending";
            }

            let rows = Array.from(body.rows);
            if (direction === "none") {
                rows = originalRows;
            } else {
                const locale = window.I18n?.language === "en" ? "en" : "zh-CN";
                const collator = new Intl.Collator(locale, { numeric: true, sensitivity: "base" });
                rows.sort((rowA, rowB) => {
                    const valueA = rowA.cells[columnIndex]?.textContent.trim() || "";
                    const valueB = rowB.cells[columnIndex]?.textContent.trim() || "";
                    const comparison = collator.compare(valueA, valueB);
                    return direction === "ascending" ? comparison : -comparison;
                });
            }

            rows.forEach((row) => body.appendChild(row));
            updateHeaders();
        }

        table.addEventListener("click", (event) => {
            const button = event.target.closest(".sort-button");
            if (button) {
                sortByColumn(Number(button.dataset.column));
            }
        });

        updateHeaders();
    }

    document.addEventListener("DOMContentLoaded", initializeTableSort, { once: true });
}());
