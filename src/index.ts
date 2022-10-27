interface Account {
  password: string;
}

function MinLength(length: number) {
  return (target: any, propertyName: PropertyKey) => {
    let value: string;

    const descripter: PropertyDescriptor = {
      get() {
        return value;
      },
      set(v: string) {
        if (v.length < length) throw new Error(`Length is less than ${length}`);
        value = v;
      },
    };

    Object.defineProperty(target, propertyName, descripter);
  };
}

class User implements Account {
  @MinLength(4)
  password: string;

  constructor(password: string) {
    this.password = password;
  }
}

const danish = new User("1234");
danish.password = "12";
console.log(danish.password);
