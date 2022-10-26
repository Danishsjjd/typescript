class Person {
  constructor(public firstName: string, public lastName: string) {}

  getFullName() {
    return this.firstName + " " + this.lastName;
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

const student = new Student("2", "Danish", "Sajjad");

console.log(student.getFullName());
