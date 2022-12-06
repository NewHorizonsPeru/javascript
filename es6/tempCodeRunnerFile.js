function Product() {
  this.name = "iPad";
  this.generation = "9na";
  this.printInfo = function () {
    setTimeout(() => {
      console.log(`${this.name} - ${this.generation}`);
    }, 1000);
  };
}

var product = new Product();
product.printInfo();
