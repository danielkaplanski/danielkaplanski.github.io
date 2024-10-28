// myMathModule.js
class MyMathModule {
    add(a, b) {
        return a + b;
    }

    subtract(a, b) {
        return a - b;
    }

    multiply(a, b) {
        return a * b;
    }

    divide(a, b) {
        if (b === 0) {
            throw new Error("Can't divide by zero");
        }
        return a / b;
    }

    square(a) {
        return a * a;
    }
}

module.exports = MyMathModule;
