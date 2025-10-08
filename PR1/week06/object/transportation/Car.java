package week06.object.transportation;

public class Car {
	private double fuelEfficiency; // efficiency of N miles per gallon or N km per liters
	private double amountOfFuel; // gallon or liters

	public Car(double fuelEfficiency) {
		this.fuelEfficiency = fuelEfficiency;
		this.amountOfFuel = 0;
	}

	public Car(double fuelEfficiency, double amountOfFuel) {
		this.fuelEfficiency = fuelEfficiency;
		this.amountOfFuel = amountOfFuel;
	}

	public double getFuelEfficiency() {
		return this.fuelEfficiency;
	}

	public double getAmountOfFuel() {
		return this.amountOfFuel;
	}

	public void setFuelEfficiency(double fuelEfficiency) {
		this.fuelEfficiency = fuelEfficiency;
	}

	public void setAmountOfFuel(double amountOfFuel) {
		this.amountOfFuel = amountOfFuel;
	}

	public double getGasInTank() {
		return this.getAmountOfFuel();
	}

	public void addGas(double amount) {
		this.amountOfFuel += amount;
	}

	public void drive(double distance) {
		this.amountOfFuel -= distance / this.fuelEfficiency;
	}

	@Override
	public String toString() {
		return "Car[fuelEfficiency=" + this.getFuelEfficiency() + ", amountOfFuel=" + this.getAmountOfFuel() + "]";
	}
}
