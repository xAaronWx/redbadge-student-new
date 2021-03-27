"use strict";
let number1;
let name1;
let stringExample;
let booExample;
let numExample;
let springWeather; // Use sparingly
//union type can do be two types
let unionStringNumber;
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
function buySellStock(stockName, qty, action) {
    let total = Number(qty) * 100;
    let status = action == "sell-stock" ? "sold" : "bought";
    return `You just ${status} ${qty} shares of ${stockName} stock for a total of $${total}`;
}
buySellStock("GME", "15", "sell-stock");
let weather = {
    temp: 78,
    cloudCondition: "sunny",
};
console.log(weather.temp);
// let weather = {
//   temp: 70,
//   cloudCondition: "overcast",
//   next5Day: [81, 75, 69, 78],
// };
//# sourceMappingURL=learning-ts.js.map