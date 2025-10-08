package week06.object.numbers;

public class FactorGeneratorDemo {

	public static void main(String[] args) {
		FactorGenerator fg1 = new FactorGenerator(150);
//		System.out.println(fg1);
//		System.out.println(fg1.nextFactor());
//		System.out.println(fg1);

		FactorGenerator fg2 = new FactorGenerator(150);
		while (fg2.hasMoreFactors()) {
			System.out.print(fg2.nextFactor() + " ");
		}
	}

}
