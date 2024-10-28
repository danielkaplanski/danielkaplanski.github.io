// currency2.js
class Currency {
    constructor() {
        this.exchangeRates = {
            USD: 4.0,      // 1 USD = 4 PLN
            EUR: 4.5,      // 1 EUR = 4.5 PLN
            GBP: 5.2,      // 1 GBP = 5.2 PLN
            CAD: 3.2,      // 1 CAD = 3.2 PLN
            CHF: 4.1       // 1 CHF = 4.1 PLN
        };
    }

    toPLN(amount, currencyCode) {
        return amount * this.exchangeRates[currencyCode];
    }

    fromPLN(amount, currencyCode) {
        return amount / this.exchangeRates[currencyCode];
    }
}

module.exports = Currency;
