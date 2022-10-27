function Component(constructor: Function): void {
  console.log("component decorator called");
  constructor.prototype.ID = Date.now();
  constructor.prototype.insertInDOM = (): string => {
    return "Inserting realtime hot module replacement 🔥🔥🔥";
  };
}

@Component
class ProfileComponent {}
