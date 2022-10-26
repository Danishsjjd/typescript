class SeatAssignment {
  [seatNumber: string]: string;
}

const seats = new SeatAssignment();

seats.a1 = "Danish";
seats.a2 = "sajjad";

interface NameByNumber {
  [names: string]: string;
}

const obj: NameByNumber = {};

obj.name1 = "Danish";
obj.name3 = "Muneeb";
obj.name2 = "Sajjad";
