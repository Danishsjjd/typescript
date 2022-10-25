// type Employee = {
//   readonly id: number;
//   name: string;
// };

// let employee: Employee = {
//   name: "Danish",
//   id: 3,
// };

// // union
// function kgToLbs(weight: number | string): number {
//   // narrowing
//   if (typeof weight === "number") return weight * 2.2;
//   else return parseInt(weight) * 2.2;
// }

// kgToLbs(10)
// kgToLbs("10Kg")
// kgToLbs([1, 2])

type Draggable = {
  drag: () => void;
};

type Resizable = {
  resize: (a: number) => void;
};

type UiWidget = Draggable & Resizable;

let textBox: UiWidget = {
  drag() {},
  resize(a) {},
};

function danish(age: number) {
  return age * 2;
  return "this is return statement";
}
