// 1
function echo<T>(arg: T): T {
  return arg;
}

// 2
// restrict
function printName1<T extends { name: string }>(obj: T) {
  return obj.name;
}

// 3
class Entity<T> {
  constructor(public ID: T) {}
}

// 4
// ? Given the following interface, what does keyof User return?
interface User {
  userId: number;
  username: string;
}
// * It returns a union of the properties of User: ‘userId’ | ‘username’
