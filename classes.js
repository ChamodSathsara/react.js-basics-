class reqtangle {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
    console.log("New reqtangle created");
  }

  getArea() {
    return this.width * this.height;
  }
  aboutMe() {
    console.log(
      `my width is${this.width} and height is${this.height} and color is${this.color}...`
    );
  }
}

let newReq = new reqtangle(22, 10, "red");
console.log(newReq.getArea());
newReq.aboutMe();
