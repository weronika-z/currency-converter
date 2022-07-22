{
    const calculateResult = (amount, currency) => {
        const rateEUR = 4.82;
        const rateUSD = 4.80;
        const rateGBP = 5.71;
        const rateCHF = 4.89;
        converterElement = document.querySelector(".js-currencyConverter");

        switch (currency) {
            case "EUR":
                converterElement.innerText = `1 EUR to ${rateEUR} PLN`;
                return amount / rateEUR;

            case "USD":
                converterElement.innerText = `1 USD to ${rateUSD} PLN`;
                return amount / rateUSD;

            case "GBP":
                converterElement.innerText = `1 GBP to ${rateGBP} PLN`;
                return amount / rateGBP;

            default:
                converterElement.innerText = `1 CHF to ${rateCHF} PLN`;
                return amount / rateCHF;
        }
    };

    const updateResultText = (result, currency) => {
        const resultElement = document.querySelector(".js-result");
        resultElement.innerHTML = `${result.toFixed(2)} ${currency}`;
    }

    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("input", () => {
            const amountElement = document.querySelector(".js-amount");
            const currencyElement = document.querySelector(".js-currency");

            const amount = +amountElement.value;
            const currency = currencyElement.value;

            const result = calculateResult(amount, currency);
            updateResultText(result, currency);
        });
    }

    init();
}