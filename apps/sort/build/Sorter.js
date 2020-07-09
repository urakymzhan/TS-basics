"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
var Sorter = /** @class */ (function () {
    function Sorter() {
    }
    Sorter.prototype.sort = function () {
        var length = this.length;
        for (var i = 0; i < length; i++) {
            for (var j = 0; j < length - i - 1; j++) {
                if (this.compare(j, j + 1)) {
                    this.swap(j, j + 1);
                }
            }
        }
    };
    return Sorter;
}());
exports.Sorter = Sorter;
// TYPE GUARDS - BAD CODE see above for better solution with Interface
// class Sorter {
//   constructor(public collection: number[] | string) {
//     this.collection = collection;
//   }
//   sort() {
//     const { length } = this.collection;
//     for (let i = 0; i < length; i++) {
//       for (let j = 0; j < length - i - 1; j++) {
//         // if collection is an array of numbers
//         // By using Type Guards other types than Array
//         if (this.collection instanceof Array) {
//           if (this.collection[j] > this.collection[j + 1]) {
//             const leftHand = this.collection[j];
//             this.collection[j] = this.collection[j + 1];
//             this.collection[j + 1] = leftHand;
//           }
//         }
//         // if collection is a string, do this logic instead
//         // ~~ compare and swap chars in a string
//         // By using Type Guards other types than String
//         if (typeof this.collection === "string") {
//           if (this.collection[j] > this.collection[j + 1]) {
//             // logic for string sorting
//           }
//         }
//       }
//     }
//   }
// }
