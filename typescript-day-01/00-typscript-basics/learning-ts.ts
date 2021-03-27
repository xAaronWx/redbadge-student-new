let number1;
let name1;
let stringExample: string;
let booExample: boolean;
let numExample: number;

//union type can do be two types
let unionStringNumber: number | string;
unionStringNumber = 5;
unionStringNumber = "5";

stringExample = "Hello";

let number2 = 4;

let restaurant = {
  name: "McDonald's",
  dineIn: false,
  foodItems: ["burgers", "shake", "pies"],
};

restaurant.foodItems.forEach((item) => {
  console.log(item.toUpperCase);
});

function buySellStock(
  stockName: string,
  qty: string | number,
  action: "sell-stock" | "buy-stock"
) {
  let total = Number(qty) * 100;
  let status = action == "sell-stock" ? "sold" : "bought";
  return `You just ${status} ${qty} shares of ${stockName} stock for a total of $${total}`;
}

buySellStock("GME", "15", "sell-stock");
