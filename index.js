const coffeeMenu = require("./coffee_data.js");


 const drinkNames = coffeeMenu.map(drink => drink.name);
 console.log(drinkNames);

 const cheapDrinks = coffeeMenu.filter(drink => drink.price <= 5);
 console.log(cheapDrinks);

 const evenPricedDrinks = coffeeMenu.filter(drink => drink.price % 2 === 0);
 console.log(evenPricedDrinks);

 const totalOrder = coffeeMenu.reduce((total, drink) => total + parseFloat(drink.price), 0);
 console.log(totalOrder);

 const seasonalDrinks = coffeeMenu.filter(drink => drink.seasonal);
 console.log(seasonalDrinks);

// const seasonalDrinksWithBeans = seasonalDrinks.map(drink => `${drink.name} with imported beans`);
// console.log(seasonalDrinksWithBeans);






































// const name = coffeeMenu.filter(coffee =>
//     name.length(name));
//     console.log();












// const array1 = ['name','price','seasonal'];
// array1.forEach(price => console.log(price));



// console.log('name');