class Ride {
  private static _activeRides: number = 0;

  start() {
    Ride._activeRides++;
  }
  stop() {
    Ride._activeRides--;
  }

  public static get activeRides(): number {
    return Ride._activeRides;
  }
}

const ride1 = new Ride();
ride1.start();

const ride2 = new Ride();
ride2.start();

console.log(Ride.activeRides);
