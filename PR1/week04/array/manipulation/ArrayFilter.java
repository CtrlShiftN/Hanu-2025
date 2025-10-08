package week04.array.manipulation;

import java.util.Arrays;

public class ArrayFilter {
	public static void main(String[] args) {
		// 1 2 3 4 5 6 7 8 9 10
		int[] integerNumbers = new int[10];
		for (int i = 0; i < integerNumbers.length; i++) {
			integerNumbers[i] = i + 1;
		}
		System.out.println(Arrays.toString(integerNumbers));

		// 0 2 4 6 8 10 12 14 16 18 20
		int[] evenIntegerNumbers = new int[11];
		for (int i = 0; i < evenIntegerNumbers.length; i++) {
			evenIntegerNumbers[i] = i * 2;
		}

		System.out.println(Arrays.toString(evenIntegerNumbers));

		// 1 4 9 16 25 36 49 64 81 100
		int[] perfectSquareNumbers = new int[10];
		for (int i = 0; i < perfectSquareNumbers.length; i++) {
			perfectSquareNumbers[i] = (int) Math.pow(i + 1, 2);
		}
		System.out.println(Arrays.toString(perfectSquareNumbers));

		// 0 0 0 0 0 0 0 0 0 0
		int[] zeroSeries = new int[10];
		System.out.println(Arrays.toString(zeroSeries));

		// 1 4 9 16 9 7 4 9 11
		int[] abandonNumbers = { 1, 4, 9, 16, 9, 7, 4, 9, 11 };
		System.out.println(Arrays.toString(abandonNumbers));

		// 0 1 0 1 0 1 0 1 0 1
		int[] oddNumbers = new int[10];
		for (int i = 1; i < oddNumbers.length; i += 2) {
			oddNumbers[i] = 1;
		}
		System.out.println(Arrays.toString(oddNumbers));

		// 0 1 2 3 4 0 1 2 3 4
		int[] divisorByFiveNumbers = new int[10];
		for (int i = 0; i < divisorByFiveNumbers.length; i++) {
			divisorByFiveNumbers[i] = i % 5;
		}
		System.out.println(Arrays.toString(divisorByFiveNumbers));
	}
}
