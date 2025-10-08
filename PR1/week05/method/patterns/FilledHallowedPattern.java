package week05.method.patterns;

import java.util.*;

public class FilledHallowedPattern {
	public static void main(String[] args) {
		// Declaration
		Scanner sc = new Scanner(System.in);
		int row;

		// Prompt user to input a number
		System.out.println("Enter the number of line: ");
		row = sc.nextInt();

		// Process
		if (row >= 3 && row <= 30) {
			printHallowedPattern(row);
		} else {
			System.out.println("Invalid row");
		}
	}

	public static void printHallowedPattern(int row) {
		for (int i = 1; i <= row; i++) {
			// left side
			for (int j = 1; j <= row; j++) {
				System.out.print("*");
			}
			// space
			System.out.print(" ");
			// right side
			if (i == 1 || i == row) {
				for (int k = 1; k <= row; k++) {
					System.out.print("*");
				}
			} else {
				for (int m = 1; m <= row; m++) {
					if (m == 1 || m == row) {
						System.out.print("*");
					} else {
						System.out.print(" ");
					}
				}
			}
			// next row
			System.out.println();
		}
	}

}
