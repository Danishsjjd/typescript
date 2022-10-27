type DecoratorOptions = {
  select: string;
};

// factory decorator
function Component(options: DecoratorOptions) {
  return (constructor: Function) => {
    console.log("component decorator called");
    constructor.prototype.ID = Date.now();
    constructor.prototype.options = options;
    constructor.prototype.insertInDOM = (): string => {
      return "Inserting realtime hot module replacement 🔥🔥🔥";
    };
  };
}

function Pipe(constructor: Function): void {
  console.log("pip constructor called");
  constructor.prototype.pipe = true;
}

@Component({ select: "#my-profile" })
@Pipe
class ProfileComponent {}
