// 1
class Logger {
  constructor(public logFile: string) {}

  log(message: string): void {
    console.log(`writing ${message} to ${this.logFile} file`);
  }
}

// 2
class Person {
  constructor(public firstName: string, public lastName: string) {}
  public get fullName(): string {
    return this.firstName + " " + this.lastName;
  }
}

class Employee extends Person {
  constructor(public salary: number, firstName: string, lastName: string) {
    super(firstName, lastName);
  }
}

// 3
// ? What is the difference between private and protected members?
// * private are not inherited by child classes

// 4
interface Address {
  street: string;
  city: string;
  zipCode: number;
}

interface EmployeeInterface {
  name: string;
  salary: number;
  address: Address;
}

let employee: EmployeeInterface = {
  name: "John Smith",
  salary: 50_000,
  address: {
    street: "Flinders st",
    city: "Melbourne",
    zipCode: 3144,
  },
};
