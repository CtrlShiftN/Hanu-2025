package week07.exceptions.lecture.demo;

import java.util.*;

public class Numbers {
	private int integerNumber;
	private double doubleNumber;
	private int positiveInteger;
	private int negativeInteger;
	public static float floatNumber;
	private Scanner sc = new Scanner(System.in);

	// overloading constructors
	public Numbers() {

	}

	public Numbers(int number) {
		this.integerNumber = number;
		if (number > 0) {
			this.positiveInteger = number;
		} else {
			this.negativeInteger = number;
		}
	}

	public Numbers(double number) {
		this.doubleNumber = number;
	}

	public void promptInteger() {
		boolean isStop = false;
		while (!isStop) {
			try {
				System.out.print("Enter an integer: ");
				this.integerNumber = this.sc.nextInt();
				isStop = true;
			} catch (Exception e) {
				System.err.println("Nah, don't try to fool me!");
				this.sc.nextLine(); // try commenting out this line
			}
		}
	}

	public void setPositiveInteger(int number) throws NegativeIntegerException {
		if (number > 0) {
			this.positiveInteger = number;
		} else {
			throw new NegativeIntegerException("Numbers.setPositiveInteger() does not receive negative numbers");
		}
	}

	public String toString() {
		return "Numbers[integer=" + this.integerNumber + ", double=" + this.doubleNumber + "]";
	}
}
