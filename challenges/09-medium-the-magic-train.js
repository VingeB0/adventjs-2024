// The elves are playing with a magical train 🚂 that carries gifts. This train moves on a board represented by an array of strings.
//
//     The train consists of an engine (@), followed by its carriages (o), and must collect magical fruits (*) which serve as fuel. The movement of the train follows these rules:
//
//     You will receive two parameters board and mov.
//
//     board is an array of strings that represents the board:
//
// @ is the train's engine.
// o are the train's carriages.
// * is a magical fruit.
// · are empty spaces.
//     mov is a string that indicates the next movement of the train from the train's head @:
//
// 'L': left
// 'R': right
// 'U': up
// 'D': down.
//     With this information, you must return a string:
//
//     'crash': If the train crashes into the edges of the board or itself.
// 'eat': If the train collects a magical fruit (*).
// 'none': If it moves without crashing or collecting any magical fruit.
//     Example:
//
// const board = [
//     '·····',
//     '*····',
//     '@····',
//     'o····',
//     'o····'
// ]
//
// console.log(moveTrain(board, 'U'))
// // ➞ 'eat'
// // Because the train moves up and finds a magical fruit
//
// console.log(moveTrain(board, 'D'))
// // ➞ 'crash'
// // The train moves down and the head crashes into itself
//
// console.log(moveTrain(board, 'L'))
// // ➞ 'crash'
// // The train moves to the left and crashes into the wall
//
// console.log(moveTrain(board, 'R'))
// // ➞ 'none'
// // The train moves to the right and there is empty space on the right

function moveTrain(board, mov) {
    let headRow = 0;
    let headCol = 0;
    for(let i=0; i<board.length; i++) {
        const row = board[i];
        for(let j=0; j<row.length; j++) {
            if(row[j] === '@') {
                headRow = i;
                headCol = j;
            }
        }
    }

    let newHeadRow = headRow;
    let newHeadCol = headCol;

    if(mov === 'R') newHeadCol++;
    if(mov === 'L') newHeadCol--;
    if(mov === 'U') newHeadRow--;
    if(mov === 'D') newHeadRow++;
    console.log(board[headRow][headCol])
    console.log('headRow', headRow, 'headCol', headCol)
    console.log('newHeadRow', newHeadRow, 'newHeadCol', newHeadCol)

    if(newHeadRow < 0 || newHeadRow >= board.length || newHeadCol < 0 || newHeadCol >= board[0].length || board[newHeadRow][newHeadCol] === '@' || board[newHeadRow][newHeadCol] === 'o') {
        return 'crash';
    }
    console.log(board[newHeadRow][newHeadCol])

    if (board[newHeadRow][newHeadCol] === '*') {
        return 'eat';
    }

    // Code here
    return 'none';
}