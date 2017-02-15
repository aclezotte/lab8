function shoppingListObjects (list) {
    var total = 0;
    
    for(i = 0; i < list.length; i++) {
        console.log(list[i].name + ": $" + list[i].price);
        total += list[i].price;
    }
    
    console.log("Total: $" + total);
}

var groceryList = [
    {name: "Milk", price: 2.49},
    {name: "Bread", price: 3.99},
    {name: "Apples",price: 4.49,},
    {name: "Spinach", price: 1.99,}
];

shoppingListObjects(groceryList);