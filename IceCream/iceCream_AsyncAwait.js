let stocks = {
  fruits: ["strawberry", "grapes", "banana", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"],
};

let isShopOpen = true;

function time(ms) {
  return new Promise((resolve, reject) => {
    if (isShopOpen) {
      setTimeout(resolve, ms);
    } else {
      reject(console.log("Shop is closed"));
    }
  });
}

function createInvoice() {
  return new Promise((resolve, reject) => {
    setTimeout((first) => {
      resolve(console.log("Invoice created"));
    }, 5000);
  });
}

async function kitchen() {
  try {
    await time(2000);
    console.log(`${stocks.fruits[0]} was selected`);

    await time(0000);
    console.log("production has started");

    createInvoice();

    await time(2000);
    console.log("fruit has been chopped");

    await time(1000);
    console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} added`);

    await time(1000);
    console.log("start the machine");

    await time(2000);
    console.log(`ice cream placed on ${stocks.holder[1]}`);

    await time(3000);
    console.log(`${stocks.toppings[0]} as toppings`);

    await time(2000);
    console.log("Serve Ice Cream");
  } catch (error) {
    console.log("customer left", error);
  } finally {
    console.log("Day ended, shop is closed");
  }
}

// Trigger
kitchen();
