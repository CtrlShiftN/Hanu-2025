package week05.method.numbers;

import java.util.Arrays;

public class MyInteger {
	public static void main(String[] args) {
		System.out.println(toBinary(9));

		int[] arr = { 2, 3, 5, 7, 11, 13 };
		System.out.println(Arrays.toString(shiftArrayLeft(arr)));
	}

	public static String toBinary(int number) {
		if (number > 0) {
			// Declaration
			String binary = "";
			int result = number, remainder;

			// Process
			while (result > 0) {
				remainder = result % 2;
				result /= 2;
				binary = remainder + binary;
			}

			// Display || Return
			return binary;
		} else {
			return "Negative integer can not be converted into binary.";
		}
	}

	public static int[] shiftArrayLeft(int[] arr) {
		int[] newArr = new int[arr.length];
		newArr[arr.length - 1] = arr[0];
		for (int i = 0; i < newArr.length - 1; i++) {
			newArr[i] = arr[i + 1];
		}
		return newArr;
	}
}
