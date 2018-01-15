import * as myModule from '/modules/my-module.js';
import {foo, bar} from '/modules/my-module.js';


export function getUsefulContents(url, callback) {
    getJSON(url, data => callback(JSON.parse(data)));
}


function main(a, b, c, ...args) {
    'use strict';

    {
        let h;
        h += 5 % 3;
        h++;
        h = null;
        h = undefined;
        h = 3 & 5 | ^2;
        h = !!false && true || (k ? "j" : "k" + typeof h);
        h = /^[a-z]+text*\b(ab|cd|ef)?$/;
        h = c instanceof String;
    }

    var x = {};
    for (var k in x) {
        console.log(k);
    }

    var y = [];
    for (var i = 0; i < y.length; i++) {
        new Item(y[i]);
    }
    delete y;

    for (let v of arguments) {
        console.log(v);
    }

    // comments
    // TODO:
    // NOTE:
    // FIXME:

    let anonymousFn = function(a, b) { return a + b; }
    let fibFunc = (function fib(n){  // recursion to anonymous function
        if (n <= 2) return 1;
        return fib(n - 1) + fib(n - 2);
    });
    fibFunc(...args);

    if (2 > 3) {
        console.log("yes!");
    } else if (4 < 5) {
        console.log("may be");
    } else {
        console.log("no");
    }
    if (3 > 2) console.log("short");

    label:
    while (false) {
        do {
            console.log("x");
            continue;
        } while (i < 5)
        console.assert("y" === 3);
        break label;
    }

    switch (i) {
        case 1:
        case "2":
            console.info(1);
            break;
        default:
            console.debug(2);
    }

    with (someThing) {
        debugger;
        x = 3;
    }

    try {
        throw Error("Alarm!");
    } catch (e) {
        console.error(e);
    }

    return a + b + "string";
}


function builtins() {
    Number(9);
    Symbol("s");
    Boolean();
    String();
    Array();
    Object();
    Symbol();
    Error("Alarm!");

    new Array();
    new Object();
    new String();

    alert(window.location.href);
    document.all;
    eval('alert(2)');

    function fn(a, b) {
        return a + b;
    }

    fn.call(null, 3, 5);
    fn.apply(null, [3, 5]);
    fn.customMethod();

    console.assert("y" === 3);
    console.log(3);
    console.info(1);
    console.debug(2);
    console.error(e);
}


function objectOriented() {
    function Person(){
        this.name = "John";
        this.age = 22;
    }


    class Polygon {
        constructor(height, width) {
            this.height = height;
            this.width = width;
        }

        function getPerimeter() {
            return (this.width + this.height) * 2;
        }
    }


    class Square extends Polygon {
        constructor(sideLength) {
            super(sideLength, sideLength);
        }

        get area() {
            return this.height * this.width * Math.sin(3);
        }

        set sideLength(newLength) {
            this.height = newLength;
            this.width = newLength;
        }
    }
}


function generatorsAndIterators() {
    function* generator(i) {
        yield i;
        yield i + 10;
        var reset = yield i + 11;
    }


    async function asyncCall() {
        return await resolveAfter2Seconds();
    }


    var myIterable = {};
    myIterable[Symbol.iterator] = function* () {
        yield 1;
        yield 2;
        yield 3;
    };
    let values = [...myIterable];
    let chars = [...'abc'];

    function* gen() {
        yield* ['a', 'b', 'c'];
    }
}


function destructuringAssigments() {
    {
        let [a, b] = [1, 2];
        let [c, d, ...e] = [1, 2, 3, 4, 5];
        let [f, , g] = [1, 2, 3];
        let {h, i} = {h: 20, i: 30};
        let {j: foo, k: bar} = {j: 40, k: 50};
        let {l=10, m=5} = {a: 3};
        let {a: aa=10, b: bb=5} = {a: 3};
        let {n, o, ...rest} = {n: 10, o: 20, p: 30, q: 40}
    }

    {
        let metadata = {
            title: 'Scratchpad',
            translations: [
               {
                locale: 'de',
                localization_tags: [],
                last_edit: '2014-04-14T08:43:37',
                url: '/de/docs/Tools/Scratchpad',
                title: 'JavaScript-Umgebung'
               }
            ],
            url: '/en-US/docs/Tools/Scratchpad'
        };
        let {title: englishTitle, translations: [{title: localeTitle}]} = metadata;
    }

    function drawES2015Chart({size = 'big', cords = {x: 0, y: 0}, radius = 25} = {}) {
        console.log(size, cords, radius);
    }

    {
        let people = [
            {
                name: 'Mike Smith',
                family: {
                    mother: 'Jane Smith',
                    father: 'Harry Smith',
                    sister: 'Samantha Smith'
                },
                age: 35
            },
            {
                name: 'Tom Jones',
                family: {
                    mother: 'Norah Jones',
                    father: 'Richard Jones',
                    brother: 'Howard Jones'
                },
                age: 25
            }
        ];
        for (let {name: n, family: {father: f}} of people) {
            console.log('Name: ' + n + ', Father: ' + f);
        }
    }

    {
        function userId({id}) {
            return id;
        }

        let function whois({displayName, fullName: {firstName: name}}) {
            console.log(displayName + ' is ' + name);
        }

        let user = {
            id: 42,
            displayName: 'jdoe',
            fullName: {
                firstName: 'John',
                lastName: 'Doe'
            }
        };

        console.log('userId: ' + userId(user)); // "userId: 42"
        whois(user); // "jdoe is John"
    }

    {
        let key = 'z';
        let {[key + '']: foo} = {z: 'bar'};
        console.log(foo); // "bar"
    }

    {
        const foo = {'fizz-buzz': true};
        const {'fizz-buzz': fizzBuzz} = foo;  // TODO: bug in tokenizer
        const {"fizz-buzz": fizzBuzz} = foo;
        console.log(fizzBuzz);
    }
}


function arrowFunctions() {
    let f1 = (a, b, c) => {
        console.log(a + b + c);
        return true;
    }
    let f2 = (a, b, c) => a + b + c;
    let f3 = x => x * 2;
    let f4 = () => 5;
    let f5 = () => {
        console.log('fire!');
        return 5;
    }
    let f6 = (a, b, ...rest) => 8;
    let f7 = (a=1, b=2) => a + b;
    let f8 = ([a, b] = [1, 2], {x: c} = {x: a + b}) => a + b + c;
    f8();  // 6
    let f9 = () => ({foo: 1});
}


function templateStrings() {
    var a = 5;
    var b = 10;

    console.log(`Fifteen is ${a + b} and not ${2 * a + b}.`);

    function tag(strings, ...values) {
        console.log(strings[0]); // "Hello "
        console.log(strings[1]); // " world "
        console.log(values[0]);  // 15
        console.log(values[1]);  // 50
        return "Bazinga!";
    }

    console.log(tag`Hello ${ a + b } world ${ a * b }`);
    // "Bazinga!"

    String.raw`Hi\n${2+3}!`;
}
