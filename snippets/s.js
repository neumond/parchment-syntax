function main(a, b, c) {
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
        let h = 9;
    }

    return a + b + "string";
}
