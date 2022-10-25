function displayEvents(event: unknown) {
  if (typeof event === "string") event.length;
  event.show();
  event.override();
}

function reject(msg: string): never {
  throw new Error(msg);
}

//....
console.log("100 lines of code");

reject("rejected");

console.log("un reachable code");
