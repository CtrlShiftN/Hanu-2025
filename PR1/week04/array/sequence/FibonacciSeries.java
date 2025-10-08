package week04.array.sequence;

import java.util.*;

public class FibonacciSeries {
	public static void main(String[] args) {
		// Declaration
		Scanner sc = new Scanner(System.in);
		int[] fibonacciSeries;
		int lastFibonacciIndex;

		// Prompt user to input s.th
		System.out.println("Enter the position of the last fibonacci: ");
		lastFibonacciIndex = sc.nextInt();
		if (lastFibonacciIndex >= 2) {
			fibonacciSeries = new int[lastFibonacciIndex + 1];
			fibonacciSeries[0] = 0;
			fibonacciSeries[1] = 1;

			// Process
			for (int i = 2; i < fibonacciSeries.length; i++) {
				fibonacciSeries[i] = fibonacciSeries[i - 2] + fibonacciSeries[i - 1];
			}

			// Display || Return
			System.out.println(Arrays.toString(fibonacciSeries));
		} else {
			System.out.println("Out of range!");
		}
	}
}
