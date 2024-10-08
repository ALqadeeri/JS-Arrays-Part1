const groceries = ["apples", "bananas", "milk", "eggs", "bread", "cheese"];
console.log(groceries[1]);

console.log(groceries.length);

console.log(groceries[groceries.length - 1]);

const lastElement = groceries.pop();
console.log(`the last element is ${lastElement}`);
console.log(groceries);

groceries.push("mango", "yogurt");
console.log(groceries);

const firstThreeItems = [groceries.slice(0, 3)];
console.log(firstThreeItems);
