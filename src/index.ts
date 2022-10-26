class Account {
  nickname?: string;

  constructor(
    readonly id: number,
    public owner: string,
    private _balance: number
  ) {}

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
