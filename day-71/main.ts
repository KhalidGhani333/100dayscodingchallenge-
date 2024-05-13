//   Class Type Annotations

class Product{
    id:number;
    name:string;
    price:number;

    
    constructor(id:number,name:string,price:number){
        this.id =id;
        this.name =name;
        this.price =price;

    }
  productInfo():string{
    return `ID:${this.id} NAME:${this.name} PRICE:${this.price}`
  }

}

let Product1 = new Product(102,"headphone",2500)
console.log(Product1.productInfo())

//   class access modifiers:

class Parent {
    protected familyName: string;

    constructor(name: string) {
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
    // 'private' property
    private _price: number;
  
    constructor(private id: number, private name: string) {
      this._price = 0; // Default price
    }
  
    // 'public' getter for price
    get price(): number {
      return this._price;
    }
  
    // 'public' setter for price
    set price(newPrice: number) {
      if (newPrice >= 0) {
        this._price = newPrice;
      } else {
        console.log("Price cannot be negative.");
      }
    }
  
    getProductInfo(): string {
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
    // 'private' property
    private static nextId: number = 1;
  
    constructor(private id: number, private name: string) {}
  
    static generateNextId(): number {
      return ProductStaticMembers.nextId++;
    }
  
    getProductInfo(): string {
      return `ID: ${this.id}, Name: ${this.name}`;
    }
  }
  
  // Generate unique IDs for products using the static method
  const product1static = new ProductStaticMembers(ProductStaticMembers.generateNextId(), "Widget");
  const product2static = new ProductStaticMembers(ProductStaticMembers.generateNextId(), "Gadget");
  
  console.log(product1static.getProductInfo()); // ID: 1, Name: Widget
  console.log(product2static.getProductInfo()); // ID: 2, Name: Gadget   
  
  
      //class implement interface

class ProductImplement {
    private static nextId:number =1


    constructor(private id:number,private name:string){}

    static generateNextId():number{
        return ProductImplement.nextId++;
    }
    getProductInfo():string{
        return `ID:${this.id} ,NAME:${this.name}`;
    }
}

let product1Implement = new ProductImplement(ProductImplement.generateNextId(),"widget")
let product2Implement = new ProductImplement(ProductImplement.generateNextId(),"gadget")

console.log(product1Implement.getProductInfo())  // ID: 1, Name: Widget
console.log(product2Implement.getProductInfo())  // ID: 2, Name: Widget


               //abstract classes and members


abstract class item{
    private static nextId:number= 1

    constructor(public id:number,protected name:string){}

    static generateNextId():number{
        return item.nextId++;
    }
    abstract getItemInfo():string;
    }
    class Item extends item{
        constructor(id:number,name:string){
            super(id,name)
        }
        getItemInfo(): string {
            return `ID:${this.id},NAME:${this.name}`
        }
    }

    let item1:item = new Item(item.generateNextId(),"widget")
    let item2:item = new Item(item.generateNextId(),"gadget")

                   //Polymorphism & Method Override


// Define an abstract class
abstract class AbstractEntity {
    private static nextId: number = 1;
    protected constructor(public id: number, protected name: string) {} // Change 'private' to 'protected'
    static generateNextId(): number {
      return AbstractEntity.nextId++;
    }
    abstract getEntityInfo(): string;
  }
  
  // Create a concrete subclass
  class Entity extends AbstractEntity {
    constructor(id: number, name: string) {
      super(id, name);
    }
    getEntityInfo(): string {
      return `ID: ${this.id}, Name: ${this.name}`;
    }
  }
  
  // Create another concrete subclass
  class AnotherEntity extends AbstractEntity {
    constructor(id: number, name: string) {
      super(id, name);
    }
    getEntityInfo(): string {
      return `ID: ${this.id}, Name: ${this.name}, Additional Info: ...`;
    }
  }
  
  // Generate unique IDs for entities using the static method
  const entity1: AbstractEntity = new Entity(AbstractEntity.generateNextId(), "Widget");
  const entity2: AbstractEntity = new AnotherEntity(AbstractEntity.generateNextId(), "Gadget");
  
  // Polymorphism: Call 'getEntityInfo' method on different concrete subclasses
  console.log(entity1.getEntityInfo()); // ID: 1, Name: Widget
  console.log(entity2.getEntityInfo()); // ID: 2, Name: Gadget, Additional Info: ...