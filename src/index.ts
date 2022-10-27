function Log(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const original = descriptor.value as Function;
  descriptor.value = function (...args: any) {
    console.log("Before");
    original.call(this, ...args);
    console.log("After");
  };
}

class ProfileComponent {
  @Log
  say(msg: string): void {
    console.log("Hello ", msg);
  }
}

const profile = new ProfileComponent();

profile.say("World");
