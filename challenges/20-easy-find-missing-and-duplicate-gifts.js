// Santa Claus 🎅 is checking the list of gifts he must deliver this Christmas. However, some gifts are missing, others are duplicated, and some have incorrect quantities. He needs your help to solve the problem.
//
//     You will receive two arrays:
//
//     received: List with the gifts Santa currently has.
//     expected: List with the gifts Santa should have.
//     Your task is to write a function that, given received and expected, returns an object with two properties:
//
//     missing: An object where the keys are the names of the missing gifts and the values are the quantities that are missing.
//     extra: An object where the keys are the names of the extra or duplicated gifts and the values are the quantities that are extra.
//     Keep in mind that:
//
//     Gifts may be repeated in both lists.
//     The gift lists are unordered.
//     If there are no missing or extra gifts, the corresponding properties (missing or extra) should be empty objects.
// fixGiftList(['puzzle', 'car', 'doll', 'car'], ['car', 'puzzle', 'doll', 'ball'])
// // Returns:
// // {
// //   missing: { ball: 1 },
// //   extra: { car: 1 }
// // }
//
// fixGiftList(
//     ['book', 'train', 'kite', 'train'],
//     ['train', 'book', 'kite', 'ball', 'kite']
// )
// // Returns:
// // {
// //   missing: { ball: 1, kite: 1 },
// //   extra: { train: 1 }
// // }
//
// fixGiftList(
//     ['bear', 'bear', 'car'],
//     ['bear', 'car', 'puzzle', 'bear', 'car', 'car']
// )
// // Returns:
// // {
// //   missing: { puzzle: 1, car: 2 },
// //   extra: {}
// // }
//
// fixGiftList(['bear', 'bear', 'car'], ['car', 'bear', 'bear'])
// // Returns:
// // {
// //   missing: {},
// //   extra: {}
// // }

//my solution
function fixGiftList(received, expected) {
    let missing = {};
    let both = {};
    let extra = {};

    const expectedCount = {};
    const receivedCount = {};
    for (const item of received) {
        expectedCount[item] = (expectedCount[item] || 0) + 1;
    }
    for (const item of expected) {
        receivedCount[item] = (receivedCount[item] || 0) + 1;
    }

    for (let i = 0; i < expected.length; i++) {
        let gift = expected[i];
        if (!received.includes(gift) || (both[gift] && both[gift] >= expectedCount[gift])) {
            missing[gift] = (missing[gift] || 0) + 1;
        } else {
            both[gift] = (both[gift] || 0) + 1;
        }
    }

    both = {};

    for (let j = 0; j < received.length; j++) {
        let gift = received[j];
        if (!expected.includes(gift) || (both[gift] && both[gift] >= receivedCount[gift])) {
            extra[gift] = (extra[gift] || 0) + 1;
        } else {
            both[gift] = (both[gift] || 0) + 1;
        }
    }

    return {
        missing,
        extra
    };
}

//solution from CHATGPT
// function fixGiftList(received, expected) {
//     const missing = {};
//     const extra = {};
//
//     const countGifts = (list) => {
//         const counts = {};
//         for (const item of list) {
//             counts[item] = (counts[item] || 0) + 1;
//         }
//         return counts;
//     };
//
//     const expectedCount = countGifts(expected);
//     const receivedCount = countGifts(received);
//
//     for (const gift in expectedCount) {
//         const diff = expectedCount[gift] - (receivedCount[gift] || 0);
//         if (diff > 0) {
//             missing[gift] = diff;
//         }
//     }
//
//     for (const gift in receivedCount) {
//         const diff = receivedCount[gift] - (expectedCount[gift] || 0);
//         if (diff > 0) {
//             extra[gift] = diff;
//         }
//     }
//
//     return { missing, extra };
// }
