package week06.object.finance;

public class BankAccountDemo {

	public static void main(String[] args) {

		// Non-static
		BankAccount benson = new BankAccount("Benson", 200.0);
		benson.withdraw(82.75);
		BankAccount mathew = new BankAccount("Mathew", 50.0);
		mathew.withdraw(67.5);
		System.out.println(benson);
		System.out.println(mathew.toString());
		benson.transfer(mathew, 19.0);
		System.out.println(benson.toString());
		System.out.println(mathew.toString());

		// static
//		Math.pow(0, 0); // static methods
//		double pi = Math.PI; // static variables, fields, attrs
//		BankAccount1.sayHello("Nam");
	}

}
