package week06.object.transportation;

public class CarDemo {

	public static void main(String[] args) {
		Car myHybrid = new Car(50); // efficiency of 50 miles per gallon
		myHybrid.addGas(20); // Tank 20 gallons
		myHybrid.drive(100); // Drive 100 miles
		double gasLeft = myHybrid.getGasInTank(); // Get gas remaining in tank
		System.out.println(gasLeft);
		System.out.println(myHybrid);
	}
}
