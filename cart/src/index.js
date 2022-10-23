import faker from "faker";

const cartData = `<div>You have ${faker.random.number()} number of items in your cart.</div>`;

document.querySelector(".dev-cart").innerHTML = cartData;
