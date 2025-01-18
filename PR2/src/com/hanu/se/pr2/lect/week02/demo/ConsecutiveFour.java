package com.hanu.se.pr2.lect.week02.demo;

public class ConsecutiveFour {

	public static void main(String[] args) {
		int[][] consecutiveCase = { 
				{ 0, 1, 0, 3, 1, 6, 1 },
				{ 0, 1, 6, 8, 6, 0, 1 },
				{ 5, 6, 2, 1, 1, 2, 9 },
				{ 6, 5, 6, 1, 1, 9, 1 },
				{ 1, 5, 1, 1, 4, 0, 7 },
				{ 3, 1, 3, 3, 6, 0, 7 } };
		int[][] notConsecutiveCase = { { 1, 2, 3, 4, 5, 6 }, { 5, 6, 7, 8, 8, 5 }, { 9, 10, 11, 12, 8, 8 },
				{ 13, 14, 15, 16, 8, 8 }, { 8, 8, 1, 1, 4, 5 }, { 1, 1, 8, 8, 15, 16 } };
		System.out.println("Is consecutive four? " + isConsecutiveFour(consecutiveCase));
		System.out.println("Is consecutive four? " + isConsecutiveFour(notConsecutiveCase));

	}

	public static boolean isConsecutiveFour(int[][] arr) {
		// Check row (horizontal)
		for (int row = 0; row < arr.length; row++) {
			for (int col = 0; col < arr[row].length - 3; col++) {
				if (arr[row][col] == arr[row][col + 1] && arr[row][col] == arr[row][col + 2]
						&& arr[row][col] == arr[row][col + 3]) {
					return true;
				}
			}
		}
		// Check col (vertical)
		for (int row = 0; row < arr.length - 3; row++) {
			for (int col = 0; col < arr[row].length; col++) {
				if (arr[row][col] == arr[row + 1][col] && arr[row][col] == arr[row + 2][col]
						&& arr[row][col] == arr[row + 3][col]) {
					return true;
				}
			}
		}

		// Check diagonal (left-right)
		for (int row = 0; row < arr.length - 3; row++) {
			for (int col = 0; col < arr[row].length - 3; col++) {
				if (arr[row][col] == arr[row + 1][col + 1] && arr[row][col] == arr[row + 2][col + 2]
						&& arr[row][col] == arr[row + 3][col + 3]) {
					return true;
				}
			}
		}
		// Check diagonal (right-left)
		for (int row = 0; row <= arr.length - 4; row++) {
			for (int col = 3; col < arr[row].length; col++) {
				if (arr[row][col] == arr[row + 1][col - 1] && arr[row][col] == arr[row + 2][col - 2]
						&& arr[row][col] == arr[row + 3][col - 3]) {
					return true;
				}
			}
		}
		return false;
	}

}
