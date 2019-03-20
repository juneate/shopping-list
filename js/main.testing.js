const pi = 3.14159;
console.log(pi)

// var qty = 2;
// var item = "Apples";
// console.log("I will buy: " + qty + " " + item + " today.");

let qty = 6;
let item = `Apples`;
// console.log(`I will buy: ${qty} ${item} today.`);


let htmlOutput = 
        `<li class="fruit">
            ${5 * 4} ${item}
        </li>`;

console.log(htmlOutput);


// function writeTasks(q, i) {
//     console.log(`I will buy: ${q} ${i} today.`);
// }

let writeTasks = (q, i) => console.log(`I will buy: ${q} ${i} today.`);

writeTasks(4, `Bananas`);
writeTasks(5, `Kiwis`);
writeTasks(qty, item);


