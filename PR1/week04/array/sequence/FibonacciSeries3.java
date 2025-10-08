package week04.array.sequence;

import java.util.Scanner;

public class FibonacciSeries3 {
	public static void main(String[] args) {
		// Declaration
		Scanner sc = new Scanner(System.in);
		int fibonacciLimit;
		int[] fibonacciSeries = new int[10000];
		fibonacciSeries[0] = 0;
		fibonacciSeries[1] = 1;

		// Prompt user to input s.th
		System.out.println("Enter the fibonacci limit: ");
		fibonacciLimit = sc.nextInt();

		// Process
		System.out.print(fibonacciSeries[0] + " ");
		System.out.print(fibonacciSeries[1] + " ");
		for (int i = 2; i < fibonacciSeries.length; i++) {
			fibonacciSeries[i] = fibonacciSeries[i - 2] + fibonacciSeries[i - 1];
			if (fibonacciSeries[i] <= fibonacciLimit) {
				System.out.print(fibonacciSeries[i] + " ");
			} else {
				break;
			}
		}

		// Display || return
	}
}
