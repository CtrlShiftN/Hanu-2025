package week06.object.numbers;

public class FactorGenerator1 {
	private int numberToFactor;
	private int lastFactor;
	private int currentValue;

	public FactorGenerator1(int numberToFactor) {
		this.numberToFactor = numberToFactor;
	}

	public boolean hasMoreFactor() {
		return this.numberToFactor > 1;
	}

	public void nextFactor() {
		int[] primeNumber = getPrimes();
		
	}

	public int[] getPrimes() {
		String primeNumber = "";
		for (int i = 2; i <= this.numberToFactor; i++) {
			if (isPrime(i)) {
				primeNumber += i + "";
			}
		}
		int[] primeNumbers = new int[primeNumber.length()];
		for (int i = 0; i < primeNumber.length(); i++) {
			primeNumbers[i] = Integer.parseInt(primeNumber.charAt(i) + "");
		}
		return primeNumbers;
	}

	public boolean isPrime(int number) {
		if (number > 0 && number <= 2) {
			return true;
		} else {
			boolean result = true;
			for (int i = 2; i <= Math.sqrt(number); i++) {
				if (number % i == 0) {
					result = false;
					break;
				}
			}
			return result;
		}
	}
}
