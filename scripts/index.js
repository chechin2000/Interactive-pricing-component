const range = document.getElementById("range");
const viewers = document.getElementById("viewers");
const money = document.getElementById("price");
const discount = document.getElementById("checkDiscount");

let activeDiscount = false;
let msjView = null;
let price = null;
let valueDiscount = null;
let msjPrice = null;

const calculateMeasure = (value) => {
  const x = (value * 100) / 5;

  if (x === 100) {
    return x;
  } else if (x === 20) {
    return 0;
  } else {
    return x - 10;
  }
};

range.addEventListener("input", () => {
  const valueRange = range.value;

  const measureBack = calculateMeasure(valueRange);

  const color =
    `linear-gradient(90deg, rgba(16,213,193,0.5)` +
    measureBack +
    `%, hsl(224, 65%, 95%)` +
    measureBack +
    `%)`;

  range.style.background = color;

  const ui = determinateProcess(valueRange);

  valueDiscount = activeDiscount === true ? ui[1] * 0.25 : 0;

  msjPrice = ui[1] - valueDiscount;

  viewers.innerHTML = ui[0];
  money.innerHTML = `$. ${msjPrice}.00 `;
});

discount.addEventListener("click", () => {
  if (activeDiscount === false) {
    activeDiscount = true;

    const ui = determinateProcess(range.value);

    valueDiscount = activeDiscount === true ? ui[1] * 0.25 : 0;

    msjPrice = ui[1] - valueDiscount;

    money.innerHTML = `$. ${msjPrice}.00 `;
  } else {
    const ui = determinateProcess(range.value);
    money.innerHTML = `$. ${ui[1]}.00`;
    activeDiscount = false;
  }
});

const determinateProcess = (valueRange) => {
  if (valueRange == 1) {
    msjView = `10K  &nbsp`;
    price = 8;
  } else if (valueRange == 2) {
    msjView = `50K  &nbsp`;
    price = 12;
  } else if (valueRange == 3) {
    msjView = `100K  &nbsp`;
    price = 16;
  } else if (valueRange == 4) {
    msjView = `500K  &nbsp`;
    price = 24;
  } else {
    msjView = `1M  &nbsp`;
    price = 36;
  }

  return [msjView, price];
};
