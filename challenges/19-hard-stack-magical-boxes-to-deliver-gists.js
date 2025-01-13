// The day to give out gifts is approaching! We need to stack the gifts we will transport on the sleigh 🛷, and for that, we are going to put them in boxes 📦.
//
// The gifts can be placed in 4 different boxes, where each box can hold weights of 1, 2, 5, and 10, represented as follows:
//
//     _
// 1: |_|
// _____
// 2: |_____|
// _____
// 5: |     |
// |_____|
//
// _________
// 10: |         |
// |_________|
//
// // JavaScript representation:
// const boxRepresentations = {
//     1: [" _ ", "|_|"] ,
//     2: [" ___ ", "|___|"],
//     5: [" _____ ", "|     |", "|_____|"],
//     10: [" _________ ", "|         |", "|_________|"]
// }
// Your mission is, upon receiving the weight of the gifts, to use the fewest boxes possible and also stack them from less weight (top) to more weight (bottom). Always aligned to the left.
//
//     Additionally, keep in mind that when stacking them, the lower edge of the box is reused.
//
// distributeWeight(1)
// // Returns:
// //  _
// // |_|
//
// distributeWeight(2)
// // Returns:
// //  ___
// // |___|
//
// distributeWeight(3)
// // Returns:
// //  _
// // |_|_
// // |___|
//
// distributeWeight(4)
// // Returns:
// //  ___
// // |___|
// // |___|
//
// distributeWeight(5)
// // Returns:
// //  _____
// // |     |
// // |_____|
//
// distributeWeight(6)
// // Returns:
// //  _
// // |_|___
// // |     |
// // |_____|
// Note: Be careful with the white spaces! Do not add whitespace to the right of a box unless necessary.

function distributeWeight(weight) {
    let string = '';
    let boxes = [10, 5, 2, 1];
    let boxesCount = {}
    for(let i = 0; i < boxes.length; i++) {
        let box = boxes[i];
        if(box > weight) continue;
        let count = Math.floor(weight / box);
        if(count > 0) {
            boxesCount[box] = box === 5 || box === 10 ?count * 2 : count;
            weight -= count * box;
        }
        if (weight === 0) break;
    }
    console.log('boxesCount', boxesCount)
    const keys = Object.keys(boxesCount);
    console.log('keys', keys)
    const spaces = {'1':'1', '2': '3', '5': '5', '10':'9'}
    for (let i=0; i < keys.length; i++) {
        let key = keys[i];
        let nextKey = keys[i+1];
        let value = boxesCount[key];
        for (let k=0; k < value; k++) {
            if(k === 0 && i === 0) string += ` ${'_'.repeat(Number(spaces[key]))} \n`  // First line of the top box
            if(k !== value-1) {
                if(k % 2 && key > 5) {
                    string += `|${'_'.repeat(Number(spaces[key]))}|\n`
                } else {
                    if(key >= 5) string += `|${' '.repeat(Number(spaces[key]))}|\n`
                }
                if(key < 5) string += `|${'_'.repeat(Number(spaces[key]))}|\n`

            }
            if(k === value-1) {
                string += `|${'_'.repeat(Number(spaces[key]))}|${'_'.repeat(Number(spaces[nextKey]) - 1 - Number(spaces[key]))}\n`
            }
        }
    }
    return string.trimEnd();
}