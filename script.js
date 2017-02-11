/*function shoppingList (items, prices) {
    var total = 0;
    
    for ( i = 0; i < items.length; i++) {
        console.log ( items[i] + ": $" + prices[i] );
        total += prices[i];
    }
    
    console.log ( "Total: $" + total );
}

var items = [
    "Milk",
    "Bread",
    "Apples",
    "Spinach"
];

var prices = [
    2.49,
    3.99,
    4.49,
    1.99
];

shoppingList (items, prices);*/

function shoppingListObjects (list) {
    var total = 0;
    
    for ( i = 0; i < list.length; i++ ) {
        console.log ( list[i].name + ": $" + list[i].price );
        total += list[i].price;
    }
    
    console.log("Total: $" + total);
}

var milk = {
    name: "Milk",
    price: 2.49,
};

var bread = {
    name: "Bread",
    price: 3.99,
};

var apples = {
    name: "Apples",
    price: 4.49,
};

var spinach = {
    name: "Spinach",
    price: 1.99,
};

var groceryList = [
    milk,
    bread,
    apples,
    spinach
];

shoppingListObjects (groceryList);