/**
 * Created by sanyamkamat on 26-05-2015.
 */

/* BEFORE */

function myFunc(a, b, c) {
    return a + b + c;
}

console.log(myFunc(1, 2, 3));
console.log(myFunc(1, 2, 3, 4));
console.log(myFunc(1, 2));

/* BEFORE */

/* AFTER */

function myFunc() {
    var x = 0;
    for (var i = 0; i < arguments.length; i++) {
        x = x + arguments[i];
    }
    return x;
}

console.log(myFunc(1, 2, 3));
console.log(myFunc(1, 2, 3, 4));
console.log(myFunc(1, 2));

/* AFTER */