import faker from "faker";

const mount = (el) => {
  let products = "";

  for (let i = 0; i < 5; i++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`;
  }

  el.innerHTML = products;
};

//Notes - Sub App Execution Context
/**Context/Situatuation #1
 * We are running this file in development in isolation
 * We are using our local index.html file
 * Which DEFENITELY has an element with an id of 'dev-products'
 * We want to immediately render our app into that element
 */

if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#dev-products");

  //Assuming our container doesn't have an element
  // with id 'dev-products'
  if (el) {
    //We are probably (most-likely) running in isolation
    //Easy to establish and follow system to ensure
    //that in this block we are in isolation
    mount(el);
  }
}
/**Context/Situattion #2
 * We are running this file in development or production
 * through the CONTAINER app
 * NO GUARANTEE that an element with an id of 'dev-products' exists
 * WE DO NOT WANT to try to immediately render the app
 */

export { mount };
