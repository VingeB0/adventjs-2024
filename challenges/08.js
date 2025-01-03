// It's time to select the fastest reindeer for Santa's journeys! 🦌🎄
// Santa Claus has organized exciting reindeer races to determine which ones are in the best shape.
//
//     Your task is to display each reindeer's progress on a snow track in isometric format.
//
// The information you receive:
//
//     indices: An array of integers representing each reindeer's progress on the track:
// 0: The lane is empty.
//     Positive number: The reindeer's current position from the beginning of the track.
// Negative number: The reindeer's current position from the end of the track.
// length: The length of each lane.
//     Return a string representing the race track:
//
//     Each lane has exactly length positions filled with snow (~).
//     Each reindeer is represented with the letter r.
//     Lanes are numbered at the end with /1, /2, etc.
//     The view is isometric, so the lower lanes are shifted to the right.
//     Examples:
//
// drawRace([0, 5, -3], 10)
// /*
//   ~~~~~~~~~~ /1
//  ~~~~~r~~~~ /2
// ~~~~~~~r~~ /3
// */
//
// drawRace([2, -1, 0, 5], 8)
// /*
//    ~~r~~~~~ /1
//   ~~~~~~~r /2
//  ~~~~~~~~ /3
// ~~~~~r~~ /4
// */
//
// drawRace([3, 7, -2], 12)
// /*
//   ~~~r~~~~~~~~ /1
//  ~~~~~~~r~~~~ /2
// ~~~~~~~~~~r~ /3
// */

/**
 * @param {number[]} indices - The reno indices
 * @param {number} length - The length of the race
 * @returns {string} The reno race
 */
function drawRace(indices, length) {
    let string = '';
    for(let i = 0; i <= indices.length-1; i++) {
        let spaces = ' '.repeat(indices.length-1 - i);
        string += spaces;

        let index = indices[i];
        for(let j = 0; j < length; j++) {
            if(j === index && index > 0 || j === (length - Math.abs(index)) && index < 0) {
                string += 'r';
            } else {
                string += '~';
            }
        }

        string += ` /` + (i+1) + `${i === indices.length-1 ? '' : '\n'}`;
    }
    return string
}