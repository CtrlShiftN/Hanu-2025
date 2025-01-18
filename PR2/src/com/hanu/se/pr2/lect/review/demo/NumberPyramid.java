package com.hanu.se.pr2.lect.review.demo;

import java.util.*;

public class NumberPyramid {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int row = sc.nextInt();
		printNumbersPyramid(row);
	}

	public static void printNumbersPyramid(int row) {
		if (row >= 3 && row <= 10) {
			for (int i = 1; i <= row; i++) {
				// left
				for (int j = 1; j <= row - i; j++) {
					System.out.print("    ");
				}
				// mid
				for (int k = 1; k <= i; k++) {
					System.out.printf("%4d", (int) Math.pow(2, k - 1));
				}
				// right
				for (int m = i - 1; m >= 1; m--) {
					System.out.printf("%4d", (int) Math.pow(2, m - 1));
				}
				// end line
				System.out.println();
			}
		} else {
			System.out.println("Invalid number of rows: Should be an integer from 3 to 10.");
		}
	}
}
