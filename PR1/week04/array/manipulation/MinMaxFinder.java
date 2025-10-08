package week04.array.manipulation;

import java.util.Arrays;

public class MinMaxFinder {

	public static void main(String[] args) {
		int[] numbers = { 36, 18, 26, 19, 12, 29, 49, 53, 67, 89 };

		int max = numbers[0];
		int min = numbers[0];
		for (int i = 1; i < numbers.length; i++) {
			if (numbers[i] > max) {
				max = numbers[i];
			}
			if (numbers[i] < min) {
				min = numbers[i];
			}
		}
		System.out.println("Max = " + max);
		System.out.println("Min = " + min);

		// Second max (unsorted array)
		int secondMaxNumber = numbers[0];
		int maxNumber = numbers[0];
		for (int i = 1; i < numbers.length; i++) {
			if (numbers[i] > maxNumber) {
				secondMaxNumber = maxNumber;
				maxNumber = numbers[i];
			} else {
				if (numbers[i] > secondMaxNumber) {
					secondMaxNumber = numbers[i];
				}
			}
		}
		System.out.println(Arrays.toString(numbers));
		System.out.println("Second Max = " + secondMaxNumber);

		// Second min or max number
		Arrays.sort(numbers);
		int secondMax = numbers[numbers.length - 2];
		int secondMin = numbers[1];
		System.out.println(Arrays.toString(numbers));
		System.out.println("Second Max = " + secondMax);
		System.out.println("Second Min = " + secondMin);
	}

}
