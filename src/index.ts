function Log(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const original = descriptor.value as Function;
  console.log("target is", target);
  console.log("propertyKey is", propertyKey);
  descriptor.value = function (...args: any) {
    console.log("Before");
    original.call(this, ...args);
    console.log("After");
  };
}

function MyCapitalize(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const original = descriptor.get;
  descriptor.get = function () {
    const results = original?.call(this);
    return typeof results === "string" ? results.toUpperCase() : results;
  };
}

class ProfileComponent {
  constructor(public firstName: string, public lastName: string) {}

  @Log
  say(msg: string): void {
    console.log("Hello ", msg);
  }

  @MyCapitalize
  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

const profile = new ProfileComponent("danish", "sajjad");

profile.say("World");

console.log(profile.fullName);
