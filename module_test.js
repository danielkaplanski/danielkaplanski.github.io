// module_test.js

// Użycie currency1.js
const currency1 = require('./currency1');

console.log('50 dolarów amerykańskich to: ' + currency1.toPLN(50, 'USD') + ' PLN');
console.log('30 euro to: ' + currency1.toPLN(30, 'EUR') + ' PLN');

// Użycie currency2.js
const Currency = require('./currency2');
let currency2 = new Currency();

console.log('50 dolarów kanadyjskich to: ' + currency2.toPLN(50, 'CAD') + ' PLN');
console.log('100 franków szwajcarskich to: ' + currency2.toPLN(100, 'CHF') + ' PLN');


const readline = require('readline');
const MyMathModule = require('./MathModule2');
const math1 = require('./MathModule1');

const math2 = new MyMathModule();

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function askQuestion(query) {
    return new Promise(resolve => rl.question(query, resolve));
}
async function run() {
    const a = parseFloat(await askQuestion('Podaj pierwszą liczbę: '));
    const b = parseFloat(await askQuestion('Podaj drugą liczbę: '));
    
    console.log(`Wynik dodawania (math1): ${math1.add(a, b)}`);
    console.log(`Wynik odejmowania (math1): ${math1.subtract(a, b)}`);
    console.log(`Wynik mnożenia (math1): ${math1.multiply(a, b)}`);
    console.log(`Wynik dzielenia (math1): ${math1.divide(a, b)}`);

    console.log(`Wynik dodawania (math2): ${math2.add(a, b)}`);
    console.log(`Wynik odejmowania (math2): ${math2.subtract(a, b)}`);
    console.log(`Wynik mnożenia (math2): ${math2.multiply(a, b)}`);
    console.log(`Wynik dzielenia (math2): ${math2.divide(a, b)}`);

    rl.close();
}



run().catch(err => {
    console.error(err);
    rl.close();
});