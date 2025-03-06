class Dog {
  private name: string;
  constructor(name: string) {
    this.name = name;
  }
  public bark(): void {
    console.log("Woof!");
  }
}

const dog: Dog = new Dog("Buddy");
dog.bark(); // Output: Woof!
