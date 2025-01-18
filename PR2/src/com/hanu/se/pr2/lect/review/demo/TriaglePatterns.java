package com.hanu.se.pr2.lect.review.demo;

import java.util.*;

public class TriaglePatterns {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		System.out.println("Enter a number of rows: ");
		int row = sc.nextInt();
		if (row < 1 || row > 9) {
			System.out.println("Invalid number of rows: Should be an integer from 1 to 9.");
		} else {
			System.out.println("Pattern A");
			printBottomLeftTriangle(row);
			System.out.println("Pattern B");
			printTopLeftTriangle(row);
			System.out.println("Pattern C");
			printBottomRightTriangle(row);
			System.out.println("Pattern D");
			printTopRightTriangle(row);
		}
	}

	public static void printBottomLeftTriangle(int row) {
		for (int i = 0; i < row; i++) {
			for (int j = 0; j <= i; j++) {
				System.out.print((j + 1) + " ");
			}
			System.out.println();
		}
	}

	public static void printTopLeftTriangle(int row) {
		for (int i = 0; i < row; i++) {
			for (int j = 0; j < row - i; j++) {
				System.out.print((j + 1) + " ");
			}
			System.out.println();
		}
	}

	public static void printBottomRightTriangle(int row) {
		for (int i = 0; i < row; i++) {
			for (int j = row - 1; j > i; j--) {
				System.out.print("  ");
			}
			for (int k = i + 1; k > 0; k--) {
				System.out.print(k + " ");
			}
			System.out.println();
		}
	}

	public static void printTopRightTriangle(int row) {
		for (int i = 0; i < row; i++) {
			for (int j = 0; j < i; j++) {
				System.out.print("  ");
			}
			for (int k = i; k < row; k++) {
				System.out.print((k - i + 1) + " ");
			}
			System.out.println();
		}
	}
}
