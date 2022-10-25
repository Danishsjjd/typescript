// 1

type Users = {
  name: string;
  age: number;
  occupation?: string;
};

let users: Users[] = [
  {
    name: "John Smith",
    age: 30,
    occupation: "Software engineer",
  },
  {
    name: "Kate Müller",
    age: 28,
  },
];

// 2

type Bird = {
  fly: () => void;
  canWalk: boolean;
};

type Fish = {
  swim: () => void;
};

type Pet = Bird | Fish;

const fish: Pet = {
  swim() {},
};

const bird: Pet = {
  fly() {},
  canWalk: true,
};

// 3

type DaysOfWeek = "Monday" | "Tuesday";

// 4
// let user = getUser();
// user?.address?.street

// foo ?? bar();

// 5
// we don't check the type
let value: unknown = "a";
if (typeof value === "string") console.log(value.toUpperCase());

// 6
