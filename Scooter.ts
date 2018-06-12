export class ElectricScooter {
  private milesPerCharge: number;
  private chargePercentage: number;

  constructor(milesPerCharge: number, chargePercentage: number) {
    this.milesPerCharge = milesPerCharge;
    this.chargePercentage = chargePercentage;
  }

  public getPercentage(): number {
    return this.chargePercentage;
  }
}