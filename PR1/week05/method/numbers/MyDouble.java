package week05.method.numbers;

import java.util.*;

public class MyDouble {
	public static void main(String[] args) {
		// Declaration
		Scanner sc = new Scanner(System.in);
		int amountOfNumber;
		double[] myFloatingPointNumbers;

		// Prompt user to input numbers
		System.out.println("Enter the quantity of numbers: ");
		amountOfNumber = sc.nextInt();
		myFloatingPointNumbers = new double[amountOfNumber];
		System.out.println("Enter " + amountOfNumber + " floating-point numbers: ");
		for (int i = 0; i < myFloatingPointNumbers.length; i++) {
			myFloatingPointNumbers[i] = sc.nextDouble();
		}

		// Process 9.5 2.4 7.1 3.0 6
		// Average
		System.out.println(calculateAverage(myFloatingPointNumbers));
		// Smallest
		System.out.println(min(myFloatingPointNumbers));
		// Largest
		System.out.println(max(myFloatingPointNumbers));
		// Range
		System.out.println(getRange(myFloatingPointNumbers));

		// Display || Return
	}

	public static double calculateAverage(double[] arr) {
		double sum = 0;
		for (int i = 0; i < arr.length; i++) {
			sum += arr[i];
		}
		return sum / arr.length;
	}

	public static double min(double[] arr) {
		double min = arr[0];
		for (int i = 1; i < arr.length; i++) {
			if (arr[i] < min) {
				min = arr[i];
			}
		}
		return min;
	}

	public static double max(double[] arr) {
		double max = arr[0];
		for (int i = 1; i < arr.length; i++) {
			if (arr[i] > max) {
				max = arr[i];
			}
		}
		return max;
	}

	public static double getRange(double[] arr) {
		double largest = max(arr);
		double smallest = min(arr);
		return largest - smallest;
	}

}
