const apikey = `fca_live_fpk2VgZL2XAI8obOMNneDoL6NpfOR4p00g317krC`;
const url = `https://api.freecurrencyapi.com/v1/latest?apikey=${apikey}`;
const drop = document.querySelectorAll(".drop1 select")
const butt = document.querySelector(".btn")
const fromcurrency = document.querySelector(".from select")
const tocurrency = document.querySelector(".to select")
const message = document.querySelector(".msg")

for (let select of drop){
for (currcode in countryList){
let newoption = document.createElement("option");
newoption.innerText = currcode;
newoption.value = currcode;
select.append(newoption);    
select.addEventListener("change",(e)=>{
    flag(e.target)
})
}} 
const flag =(e)=>{
let currcode = e.value;
let countrycode = countryList[currcode];
let newsrc = `https://flagsapi.com/${countrycode}/flat/64.png`
let img = e.parentElement.querySelector("img");
img.src= newsrc;
}

butt.addEventListener("click",async(e)=>{
    e.preventDefault();
    let amount = document.querySelector(".amount input");
    let amtval = amount.value;
    console.log(amtval)
    if(amtval == 0 || amtval < 0){
        alert("please enter valid amount")
    }
    const baseCurrency = fromcurrency.value
    const targetCurrency = tocurrency.value
    console.log(`converting ${amtval} ${baseCurrency} ${targetCurrency}`);

    let response = await fetch(url);
    let data = await response.json();
    let baseRate = data.data[baseCurrency];
    let targetRate = data.data[targetCurrency];
    if (baseRate === 0 || targetRate === 0) {
        alert("Received invalid exchange rates.");
        return; // Exit the function if rates are zero
    }
    let finalamount = (amtval / baseRate) * targetRate;    console.log(finalamount)
    message.innerText = `${amtval} ${fromcurrency.value} = ${finalamount} ${tocurrency.value}`

});






// const baseCurrency = 'USD';
// const targetCurrency = 'INR';


// const amount = 100; 


// fetch(url)
//   .then(response => response.json()) 
//   .then(data => {
//     const exchangeRate = data.data[targetCurrency];
    
//     if (exchangeRate) {
//       const convertedAmount = amount * exchangeRate;
//       console.log(`${amount} ${baseCurrency} is equal to ${convertedAmount.toFixed(2)} ${targetCurrency}`);
//     } else {
//       console.error(`Exchange rate for ${targetCurrency} not available.`);
//     }
//   })
//   .catch(error => {
//     console.error('Error fetching exchange rates:', error);
//   });
