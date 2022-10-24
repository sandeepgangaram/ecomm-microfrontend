import faker from "faker";

const mount = (el) => {
  const cartData = `<div>You have ${faker.random.number()} number of items in your cart.</div>`;

  el.innerHTML = cartData;
};

if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#dev-cart");

  if (el) {
    mount(el);
  }
}

export { mount };
