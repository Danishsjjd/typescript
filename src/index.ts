class Account {
  readonly id: number;
  name: string;
  private _balance: number;
  nickname?: string;

  constructor(id: number, owner: string, balance: number) {
    this.name = owner;
    this.id = id;
    this._balance = balance;
  }

  deposit(amount: number): void {
    if (amount <= 0) throw new Error("Invalid amount");
    // record transactions
    this._balance = amount;
    this.transactions(amount);
  }

  private transactions(deposit: number) {
    console.log(deposit);
  }

  get balance(): number {
    return this._balance;
  }
}

const account = new Account(1, "Danish", 0);

account.deposit(100);

console.log(account.balance);
