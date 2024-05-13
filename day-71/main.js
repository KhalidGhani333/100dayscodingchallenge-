"use strict";
//   Class Type Annotations
class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
    productInfo() {
        return `ID:${this.id} NAME:${this.name} PRICE:${this.price}`;
    }
}
let Product1 = new Product(102, "headphone", 2500);
console.log(Product1.productInfo());
//   class access modifiers:
class Parent {
    constructor(name) {
        this.familyName = name;
    }
}
class Child extends Parent {
    introduceFamily() {
        console.log(`Our family name is ${this.familyName}`);
    }
}
//const parent = new Parent("Smith");
const child = new Child("Johnson");
// console.log(parent.familyName); // This would result in an error because familyName is protected
child.introduceFamily(); // This is a valid way to access the protected property
//  Class accessors
class ProductExAccessors {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this._price = 0; // Default price
    }
    // 'public' getter for price
    get price() {
        return this._price;
    }
    // 'public' setter for price
    set price(newPrice) {
        if (newPrice >= 0) {
            this._price = newPrice;
        }
        else {
            console.log("Price cannot be negative.");
        }
    }
    getProductInfo() {
        return `ID: ${this.id}, Name: ${this.name}, Price: $${this._price}`;
    }
}
// Create an instance of the ProductExAccessors class
const productEx = new ProductExAccessors(1, "Widget");
console.log(productEx.getProductInfo()); // Default price: ID: 1, Name: Widget, Price: $0
// Use the 'setter' to update the price
productEx.price = 20.0;
console.log(productEx.getProductInfo()); // Updated price: ID: 1, Name: Widget, Price: $20
// Attempting to set a negative price triggers the setter logic
productEx.price = -5; // Price cannot be negative.
//class static members
class ProductStaticMembers {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    static generateNextId() {
        return ProductStaticMembers.nextId++;
    }
    getProductInfo() {
        return `ID: ${this.id}, Name: ${this.name}`;
    }
}
// 'private' property
ProductStaticMembers.nextId = 1;
// Generate unique IDs for products using the static method
const product1static = new ProductStaticMembers(ProductStaticMembers.generateNextId(), "Widget");
const product2static = new ProductStaticMembers(ProductStaticMembers.generateNextId(), "Gadget");
console.log(product1static.getProductInfo()); // ID: 1, Name: Widget
console.log(product2static.getProductInfo()); // ID: 2, Name: Gadget   
//class implement interface
class ProductImplement {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    static generateNextId() {
        return ProductImplement.nextId++;
    }
    getProductInfo() {
        return `ID:${this.id} ,NAME:${this.name}`;
    }
}
ProductImplement.nextId = 1;
let product1Implement = new ProductImplement(ProductImplement.generateNextId(), "widget");
let product2Implement = new ProductImplement(ProductImplement.generateNextId(), "gadget");
console.log(product1Implement.getProductInfo()); // ID: 1, Name: Widget
console.log(product2Implement.getProductInfo()); // ID: 2, Name: Widget
