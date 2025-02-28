const Item = require('./Item');
const Inventory = require('./Inventory');

const inventory = new Inventory();

const item1 = new Item(1, 'Laptop', 10);
const item2 = new Item(2, 'Mouse', 50);

inventory.addItem(item1);
inventory.addItem(item2);

console.log('Initial Inventory:', inventory.getItems());

inventory.removeItem(1);
console.log('After Removing Item 1:', inventory.getItems());

const updatedItem2 = new Item(2, 'Mouse', 30);
inventory.updateItem(2, updatedItem2);
console.log('After Updating Item 2:', inventory.getItems());