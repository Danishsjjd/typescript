abstract class Shape {
  constructor(public color: string) {}

  abstract render(): void;
}

class Circle extends Shape {
  constructor(public size: number, color: string) {
    super(color);
  }
  override render(): void {}
}

const shape = new Shape("red");

shape.render();
