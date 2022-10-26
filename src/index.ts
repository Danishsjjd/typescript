class Account {
  id: number;
  owner: string;
  balance: number;

  constructor(id: number, owner: string, balance: number) {
    this.owner = owner;
    this.id = id;
    this.balance = balance;
  }

  deposit(amount: number): void {
    if (amount <= 0) throw new Error("Invalid amount");
    this.balance = amount;
  }
}

const account = new Account(1, "Danish", 0);

account.deposit(100);

console.log(account);
