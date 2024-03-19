/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  const result = [];
  for (let transaction of transactions) {
    let found = false;
    for (let item of result) {
      if (item.category == transaction.category) {
        item.totalSpent += transaction.price;
        found = true;
        break;
      }
    }

    if (found == false) {
      let newCategory = {};
      newCategory['category'] = transaction.category;
      newCategory['totalSpent'] = transaction.price;
      result.push(newCategory);
    }
  }

  return result;
}

module.exports = calculateTotalSpentByCategory;
