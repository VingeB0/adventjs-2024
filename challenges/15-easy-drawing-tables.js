function drawTable(data) {
    function capitalize(s) {
        return s && String(s[0]).toUpperCase() + String(s).slice(1);
    }

    const arr = data.reduce((acc, obj) => {
        for (const key in obj) {
            if (!acc[key]) {
                acc[key] = [];
            }
            acc[key].push(String(obj[key]));
        }
        return acc;
    }, {});

    const keys = Object.keys(arr);
    let longestHeaders = keys.map((key) => key.length);
    let longestValues = keys.map((key) =>
        arr[key].reduce((a, b) => (a.length > b.length ? a : b), '').length
    );

    // Calculate max length per column
    const columnWidths = keys.map((_, i) =>
        Math.max(longestHeaders[i], longestValues[i])
    );

    const edgeFrame = `+${columnWidths.map((width) => '-'.repeat(width + 2)).join('+')}+`;
    const headerFrame = `| ${keys.map((key, i) => capitalize(key).padEnd(columnWidths[i])).join(' | ')} |`;

    let rows = '';
    const numRows = arr[keys[0]].length;

    for (let i = 0; i < numRows; i++) {
        const row = keys
            .map((key, j) => String(arr[key][i] || '').padEnd(columnWidths[j]))
            .join(' | ');
        rows += `| ${row} |\n`;
    }

    return `${edgeFrame}\n${headerFrame}\n${edgeFrame}\n${rows}${edgeFrame}`;
}

console.log(drawTable([
    { name: 'Alice', city: 1 },
    { name: 'Bob', city: 22 },
    { name: 'Charlie', city: 333 }
]));


// ChatGPT has arrived at the North Pole and the elf Sam Elfman is working on an application for managing gifts and children.
//
//     To enhance the presentation, he wants to create a function drawTable that receives an array of objects and converts it into a text table.
//
//     The drawn table should represent the object data as follows:
//
//     It has a header with the column name.
//     The column name has the first letter capitalized.
//     Each row should contain the values of the objects in the corresponding order.
//     Each value must be left-aligned.
//     Fields always leave a space on the left.
//     Fields leave the necessary space on the right to align the box.
//     Look at the example to see how you should draw the table:
//
//     drawTable([
//         { name: 'Alice', city: 'London' },
//         { name: 'Bob', city: 'Paris' },
//         { name: 'Charlie', city: 'New York' }
//     ])
// // +---------+-----------+
// // | Name    | City      |
// // +---------+-----------+
// // | Alice   | London    |
// // | Bob     | Paris     |
// // | Charlie | New York  |
// // +---------+-----------+
//
// drawTable([
//     { gift: 'Doll', quantity: 10 },
//     { gift: 'Book', quantity: 5 },
//     { gift: 'Music CD', quantity: 1 }
// ])
// // +----------+----------+
// // | Gift     | Quantity |
// // +----------+----------+
// // | Doll     | 10       |
// // | Book     | 5        |
// // | Music CD | 1        |
// // +----------+----------+