package week06.object.transportation;

public class Car1 {
	double fuelEfficiency; // miles/gallon
	double amountOfFuel;

	public Car1(double fuelEfficiency) {
		this.fuelEfficiency = fuelEfficiency;
		this.amountOfFuel = 0;
	}

	public void drive(double distance) {
		this.amountOfFuel -= distance / fuelEfficiency;
	}

	public double getGasInTank() {
		return this.amountOfFuel;
	}

	public void addGas(double amount) {
		this.amountOfFuel += amount;
	}

}
