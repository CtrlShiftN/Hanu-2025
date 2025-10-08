package week05.method.numbers;

public class PerfectNumbers {
	public static void main(String[] args) {
		System.out.println("The four perfect numbers less than 10,000: ");
		for (int i = 1; i < 10000; i++) {
			if (isPerfectNumber(i)) {
				System.out.println(i);
			}
		}
	}

	public static boolean isPerfectNumber(int number) {
		int sum = 0;

		for (int i = 1; i < number; i++) {
			if (number % i == 0) {
				sum += i;
			}
		}
		return sum == number;
	}
}
