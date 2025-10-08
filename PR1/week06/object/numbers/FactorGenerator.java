package week06.object.numbers;

public class FactorGenerator {
	private int numberToFactor;
	private int currentFactor = 2;

	public FactorGenerator(int numberToFactor) {
		this.numberToFactor = numberToFactor;
	}

	public int getNumberToFactor() {
		return this.numberToFactor;
	}

	public int getCurrentFactor() {
		return this.currentFactor;
	}

	public boolean hasMoreFactors() {
		return this.numberToFactor > 1;
	}

	public int nextFactor() {
		while (this.numberToFactor % this.currentFactor != 0) {
			this.currentFactor++;
		}
		this.numberToFactor /= this.currentFactor;
		return this.currentFactor;
	}

	public String toString() {
		return "FactorGenerator[numberToFactor=" + this.getNumberToFactor() + ",currentFactor="
				+ this.getCurrentFactor() + "]";
	}
}
