interface Calender {
  name: string;
  addEvent(): void;
  removeEvent(): void;
}

interface CloudCalender extends Calender {
  sync(): void;
}

class GoogleCalender implements Calender {
  constructor(public name: string) {}

  addEvent(): void {
    throw new Error("Method not implemented.");
  }
  removeEvent(): void {
    throw new Error("Method not implemented.");
  }
}

type Person = {
  name: string;
  walk(): void;
};

// type is not extendable

class Students implements Person {
  constructor(public name: string) {}

  walk(): void {
    throw new Error("Method not implemented.");
  }
}
