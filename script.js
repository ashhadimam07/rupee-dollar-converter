const rupee = document.querySelector('.rs');
const dollar = document.querySelector('.dollar');
const indianVal = document.querySelector(".value");

function rsToDollar() {
fetch('https://api.exchangeratesapi.io/latest?base=USD&symbols=INR')
.then(response => response.json())
.then(json => {
  indianVal.innerHTML = Number(json.rates.INR).toFixed(2);
  dollar.value = ((rupee.value / json.rates.INR) * 10).toFixed(2);
});
}


rupee.addEventListener('input', rsToDollar);


function dollarToRs() {
    fetch('https://api.exchangeratesapi.io/latest?base=USD&symbols=INR')
    .then(response => response.json())
    .then(json => {
      indianVal.innerHTML = Number(json.rates.INR).toFixed(2);
      rupee.value = ((dollar.value * json.rates.INR) / 10).toFixed(2);
    });
}

dollar.addEventListener('input', dollarToRs);

function updateValue() {
fetch(`https://api.exchangeratesapi.io/latest?base=USD&symbols=INR`)
    .then(response => response.json())
    .then(json => {
      indianVal.innerHTML = Number(json.rates.INR).toFixed(2);
    });
}

updateValue();