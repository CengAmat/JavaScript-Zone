let stocks = {
  fruits: ["strawberry", "grapes", "banana", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"],
};

let isShopOpen = true;

let order = (time, work) => {
  return new Promise((resolve, reject) => {
    if (isShopOpen) {
      setTimeout(() => {
        resolve(work());
      }, time);
    } else reject(console.log("Our shop is closed"));
  });
};

order(2000, () => console.log(`${stocks.fruits[0]} was selected`))
  .then(() => {
    return order(0000, () => console.log("Production has started"));
  })
  .then(() => {
    return order(2000, () => console.log("The fruit was chopped"));
  })
  .then(() => {
    return order(1000, () =>
      console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} were added.`)
    );
  })
  .then(() => {
    return order(1000, () => console.log("Start the machine"));
  })
  .then(() => {
    return order(2000, () =>
      console.log(`Ice-cream was placed on ${stocks.holder[0]}.`)
    );
  })
  .then(() => {
    return order(3000, () =>
      console.log(`${stocks.toppings[0]} was added as toppings`)
    );
  })
  .then(() => {
    return order(3000, () => console.log("Ice-cream was served"));
  })
  .catch(() => {
    console.log("Customer left");
  })
  .finally(() => {
    console.log("end of day, shop is closed");
  });
