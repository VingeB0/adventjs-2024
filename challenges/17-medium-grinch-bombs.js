// The Grinch has been up to his tricks in the North Pole and has planted explosive coal bombs 💣 in the elves' toy factory. He wants all the toys to be rendered useless, and that's why he has left a grid where some cells have explosive coal (true) and others are empty (false).
//
//     The elves need your help to map the dangerous areas. Each empty cell should display a number indicating how many explosive coal bombs there are in the adjacent positions, including diagonals.
//
// detectBombs([
//     [true, false, false],
//     [false, true, false],
//     [false, false, false]
// ])
// // [
// //   [1, 2, 1],
// //   [2, 1, 1],
// //   [1, 1, 1]
// // ]
//
// detectBombs([
//     [true, false],
//     [false, false]
// ])
// // [
// //   [0, 1],
// //   [1, 1]
// // ]
//
// detectBombs([
//     [true, true],
//     [false, false],
//     [true, true]
// ])
//
// // [
// //   [1, 1],
// //   [4, 4],
// //   [1, 1]
// // ]
// Note: Want a hint? You've surely played the Minesweeper game before… 😉


//MY SOLUTION
// function detectBombs(grid) {
//     let res = [];
//     for(let i = 0; i < grid.length; i++) {
//         let temp = [];
//         for(let j = 0; j < grid[i].length; j++) {
//             let count = 0;
//             // let current = grid[i][j];
//             let nextCol = grid[i][j + 1] !== undefined ? grid[i][j + 1] : false;
//             let prevCol = grid[i][j - 1] !== undefined ? grid[i][j - 1] : false;
//
//             let prevRow = grid[i - 1] !== undefined ? grid[i - 1][j] : false;
//             let nextRow = grid[i + 1] !== undefined ? grid[i + 1][j] : false;
//
//             let leftTopEdge = grid[i - 1] !== undefined && grid[i][j - 1] !== undefined ? grid[i - 1][j - 1] : false;
//             let rightTopEdge = grid[i - 1] !== undefined && grid[i][j + 1] !== undefined ? grid[i - 1][j + 1] : false;
//
//             let leftBotEdge = grid[i + 1] !== undefined && grid[i][j + 1] !== undefined ? grid[i + 1][j + 1] : false;
//             let rightBotEdge = grid[i + 1] !== undefined && grid[i][j - 1] !== undefined ? grid[i + 1][j - 1] : false;
//
//             if(nextCol === true) ++count;
//             if(prevCol === true) ++count;
//
//             if(nextRow === true) ++count;
//             if(prevRow === true) ++count;
//
//             if(leftTopEdge === true) ++count;
//             if(rightTopEdge === true) ++count;
//
//             if(leftBotEdge === true) ++count;
//             if(rightBotEdge === true) ++count;
//
//             // if(current === true) count = 1;
//             temp.push(count)
//         }
//         res.push(temp)
//     }
//     return res
// }
//
// console.log(detectBombs([
//     [true, false, false],
//     [false, true, false],
//     [false, false, false]
// ]))
//
// console.log(detectBombs([
//     [true, false],
//     [false, false]
// ]));
// [
//   [1, 2, 1],
//   [2, 1, 1],
//   [1, 1, 1]
// ]

// CHATGPT SOLUTION
function detectBombs(grid) {
    let res = [];
    const rows = grid.length;
    const cols = grid[0].length;

    const directions = [
        [-1, -1], [-1, 0], [-1, 1],
        [0, -1],          [0, 1],
        [1, -1], [1, 0], [1, 1]
    ];

    for (let i = 0; i < rows; i++) {
        let temp = [];
        for (let j = 0; j < cols; j++) {
            let count = 0;

            for (let [dx, dy] of directions) {
                const x = i + dx;
                const y = j + dy;
                if (x >= 0 && x < rows && y >= 0 && y < cols && grid[x][y]) {
                    count++;
                }
                // x >= 0 and x < rows: Checks if the coordinate x is within the valid range of rows in the grid array.
                //     y >= 0 and y < cols: Checks if the coordinate y is within the valid range of columns in the grid array.
                //     grid[x][y]: Checks if the cell at coordinates (x, y) contains a bomb (true).
            }

            temp.push(count);
        }
        res.push(temp);
    }
    return res;
}

console.log(detectBombs([
    [true, false, false],
    [false, true, false],
    [false, false, false]
]));

console.log(detectBombs([
    [true, false],
    [false, false]
]));

console.log(detectBombs([
    [true, true],
    [false, false],
    [true, true]
]));
