class Person {
  constructor(public firstName: string, public lastName: string) {}

  get fullName(): string {
    return this.firstName + " " + this.lastName;
  }
  protected walk() {
    console.log("walking");
  }
}

class Student extends Person {
  constructor(public studentId: string, firstName, lastName) {
    super(firstName, lastName);
  }

  giveTest() {
    console.log("giving test");
  }
}

class Teacher extends Person {
  override get fullName(): string {
    return "Professor " + super.fullName;
  }
}

class Principle extends Person {
  override get fullName(): string {
    return "Principle " + super.fullName;
  }
}

function printNames(people: Person[]) {
  for (const person of people) console.log(person.fullName);
}

printNames([
  new Student("1", "danish", "sajjad"),
  new Teacher("Mosh", "Hamadani"),
  new Principle("danish", "sajjad"),
]);
