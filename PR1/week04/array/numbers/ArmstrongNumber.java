package week04.array.numbers;

public class ArmstrongNumber {

	public static void main(String[] args) {
		// Process
		for (int i = 100; i < 1000; i++) {
			// 1.
//			String number = i + "";
//			int hundreds = Integer.parseInt(number.charAt(0) + "");
//			int tens = Integer.parseInt(number.charAt(1) + "");
//			int ones = Integer.parseInt(number.charAt(2) + "");

//			int sum = hundreds * hundreds * hundreds + tens * tens * tens + ones * ones * ones;
//			int sum = (int) (Math.pow(hundreds, 3) + Math.pow(tens, 3) + Math.pow(ones, 3));
//
//			if (sum == i) {
//				System.out.print(i + " ");
//			}

			// 2.
			int sum = 0, remainder = i;
			while (remainder > 0) {
				int ones = remainder % 10;
				remainder /= 10;
				sum += ones * ones * ones;
			}
			if (sum == i) {
				System.out.print(i + " ");
			}
		}

		// Display
	}

}
