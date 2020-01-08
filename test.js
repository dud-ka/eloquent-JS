// ============== 2.1 ==============
// function triangle(number) {
//     let solution = '';
//     for (let height = 0; height < number; height++) {
//         solution += '*';
//         console.log(solution);
//     }
// }

// let number = prompt('Ile?');
// triangle(number);

// =================================
// for (let line = "#"; line.length < 8; line += "#")
//     console.log(line);

// ============== 2.2 ==============

// for (let i = 1; i <= 100; i++) {
//     let solution = '';
//     if (i % 3 === 0) solution += 'Fizz';
//     if (i % 5 === 0) solution += 'Buzz';
//     if (i % 3 !== 0 && i % 5 !== 0) solution = i;

//     console.log(solution);

// }

// =================================
// for (let n = 1; n <= 100; n++) {
//     let output = "";
//     if (n % 3 == 0) output += "Fizz";
//     if (n % 5 == 0) output += "Buzz";
//     console.log(output || n);
// }

// ============== 2.3 ==============
// function chest(size) {
//     let solution = '';
//     for (let i = 1; i <= size; i++) {
//         for (let j = 1; j <= size; j++) {
//             if ((j % 2 !== 0 && i % 2 !== 0) || (j % 2 === 0 && i % 2 === 0)) {
//                 solution += '#';
//             } else { solution += ' '; }
//         }
//         solution += '\n';
//     }
//     console.log(solution);
// }

// chest(4);
// chest(8);

// =================================
// let size = 8;

// let board = "";

// for (let y = 0; y < size; y++) {
//   for (let x = 0; x < size; x++) {
//     if ((x + y) % 2 == 0) {
//       board += " ";
//     } else {
//       board += "#";
//     }
//   }
//   board += "\n";
// }

// console.log(board);

function findSolution(target) {
    function find(current, history) {
        if (current == target) {
            return history;
        } else if (current > target) {
            return null;
        } else {
            return (
                find(current + 5, `(${history} + 5)`) ||
                find(current * 3, `(${history} * 3)`)
            );
        }
    }
    return find(1, "1");
}

console.log(findSolution(24));
console.log(findSolution(23));
console.log(findSolution(25));