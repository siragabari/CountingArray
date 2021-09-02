"use-strict"

let timer;
let array = [];
let iterator = 0;

function count() {
    array.unshift(iterator);
    console.log(array);
    iterator++;
    if(iterator > 9) {
        array.pop(array);
    }
}

timer = setInterval(count, 500);
