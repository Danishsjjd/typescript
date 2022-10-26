function echo<T extends number | string>(value: T): T {
  return value;
}

echo("true");

class Person {
  constructor(public name: string) {}
}

class Customer extends Person {}

function echo2<T extends Person>(value: T): T {
  return value;
}

echo2(new Person("str"));
echo2(new Customer("str"));
echo2({ name: "str" });
