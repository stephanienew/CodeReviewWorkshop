export class Bike {
  private gear: number;

  constructor(startingGear: number) {
    this.gear = startingGear;
  }

  public setGear(newGear: string) {
    this.gear = Number(newGear);
  }
}