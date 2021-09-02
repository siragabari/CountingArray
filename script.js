"use-strict"

let timer;
let array = [];
let iterator = 0;

function count() {
    array.push(iterator);
    console.log(array);
    iterator++;
    if(iterator >= 9) {
        array.shift();
    }
}

timer = setInterval(count, 500);
