type DecoratorOptions = {
  select: string;
};

// factory decorator
function Component(options: DecoratorOptions) {
  return (constructor: Function) => {
    console.log("component decorator called");
    constructor.prototype.ID = Date.now();
    constructor.prototype.insertInDOM = (): string => {
      return "Inserting realtime hot module replacement 🔥🔥🔥";
    };
  };
}

@Component({ select: "#my-profile" })
class ProfileComponent {}
