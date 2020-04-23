const allAmounts = document.querySelectorAll('.amount');
const prices = [];
for(let amount of allAmounts) {
  const price = amount.innerText.trim().replace(',','');
  const priceNum = price.slice(1)
  prices.push(parseInt(priceNum));
}

const minPrice = prices.reduce((prev, cur) => (Math.min(prev,cur)));
console.log(minPrice);