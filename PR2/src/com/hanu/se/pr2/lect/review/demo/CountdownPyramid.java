package com.hanu.se.pr2.lect.review.demo;

import java.util.*;

public class CountdownPyramid {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		System.out.println("Enter the number of lines: ");
		int row = sc.nextInt();
		printPyramid(row);

	}

	public static void printPyramid(int row) {
		if (row >= 1 && row <= 15) {
			for (int i = 1; i <= row; i++) {
				// left
				for (int j = 1; j <= row - i; j++) {
					System.out.print("   ");
				}
				// mid
				for (int k = i; k >= 1; k--) {
					System.out.printf("%3d", k);
				}
				// right
				for (int m = 2; m <= i; m++) {
					System.out.printf("%3d", m);
				}
				// end line
				System.out.println();
			}
		} else {
			System.out.println("Invalid number of lines: Should be an integer from 1 to 15.");
		}
	}

}
