function main(a, b, c, ...args) {
    'use strict';

    var x = {};
    for (var i in x) {
        console.log(c);
    }
    var y = [];
    for (var i = 0; i < y.length; i++) {
        new Item(y[i]);
    }
    delete y;

    {
        let h = Number(9);
        const k = Symbol("s");
        const l = Boolean();
        const s = String();
        const a = Array();
        const o = Object();
        h += 5 % 3;
        h = null;
        h = undefined;
        h = 3 & 5 | ^2;
        h = false && true || (k ? "j" : "k");
    }

    // comments

    let fibFunc = (function fib(n){
        return fib(n - 1) + n;
    });

    console.log(fibFunc.call(null, 3));
    fibFunc.apply(null, [3]);
    fibFunc.customMethod();
    fibFunc(...args);

    for (let v of arguments) {
        let a = new Array();
        let b = new Object();
        let c = new String();
    }

    do {
        console.log("x");
    } while (i < 5)

    while (false) {
        console.error("y");
    }

    alert(window.location.href);

    switch (i) {
        case 1:
        case 2:
            console.info(1);
            break;
        default:
            console.debug(2);
    }

    with (someThing) {
        x = 3;
    }

    eval('alert(2)');

    return a + b + "string";
}


function Person(){
    this.name = "John";
    this.age = 22;
}


class Polygon {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}


class Square extends Polygon {
  constructor(sideLength) {
    super(sideLength, sideLength);
  }
  get area() {
    return this.height * this.width * math.sin(3);
  }
  set sideLength(newLength) {
    this.height = newLength;
    this.width = newLength;
  }
}
