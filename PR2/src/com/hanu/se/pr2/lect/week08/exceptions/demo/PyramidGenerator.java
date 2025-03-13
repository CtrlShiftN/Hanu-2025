package com.hanu.se.pr2.lect.week08.exceptions.demo;

public class PyramidGenerator {
	private int noOfRow;

	public PyramidGenerator(int noOfRow) throws InvalidInputException {
		if (!isValidNoOfRow(noOfRow)) {
			throw new InvalidInputException("Number of row should be from 1 to 10!");
		}
		this.noOfRow = noOfRow;
	}

	public int getNoOfRow() {
		return this.noOfRow;
	}

	public void setNoOfRow(int noOfRow) throws InvalidInputException {
		if (!isValidNoOfRow(noOfRow)) {
			throw new InvalidInputException("Number of row should be from 1 to 10!");
		}
		this.noOfRow = noOfRow;
	}

	private boolean isValidNoOfRow(int noOfRow) {
		return noOfRow > 0 && noOfRow < 10;
	}

	public void printHalfRightPyramid() {
		int rows = this.getNoOfRow();
		for (int i = 1; i <= rows; i++) {
			int num = (int) Math.pow(2, i - 1); // Start from 2^(i-1)
			for (int j = 1; j <= i; j++) {
				System.out.printf("%-4d", num);
				num /= 2; // Halve the number for the next position
			}
			System.out.println();
		}
	}

	public void printHalfLeftPyramid() {
		int rows = this.getNoOfRow();
		for (int i = 1; i <= rows; i++) {
			// Print leading spaces
			for (int s = 0; s < rows - i; s++) {
				System.out.print("    "); // 4 spaces for alignment
			}
			int num = 1; // Start from 2^(i-1)
			for (int j = 1; j <= i; j++) {
				System.out.printf("%4d", num);
				num *= 2; // Halve the number for the next position
			}
			System.out.println();
		}
	}

	public void printFullPyramid() {
		int rows = this.getNoOfRow();
		for (int i = 1; i <= rows; i++) {
			// Print leading spaces
			for (int s = 1; s <= rows - i; s++) {
				System.out.print("    "); // Adjust space for alignment
			}
			int num = 1;
			// Ascending sequence (1, 2, 4, ...)
			for (int j = 1; j <= i; j++) {
				System.out.printf("%-4d", num);
				num *= 2; // Double the number
			}
			num /= 2; // Adjust for mirroring
			// Descending sequence (..., 4, 2, 1)
			for (int j = 1; j < i; j++) {
				num /= 2;
				System.out.printf("%-4d", num);
			}
			System.out.println();
		}
	}

	public void printInvertedHalfRightPyramid() {
		int rows = this.getNoOfRow();
		for (int i = rows; i >= 1; i--) {
			int num = (int) Math.pow(2, i - 1); // Start from 2^(i-1)
			for (int j = 1; j <= i; j++) {
				System.out.printf("%-4d", num);
				num /= 2; // Halve the number for the next position
			}
			System.out.println();
		}
	}

	public void printInvertedHalfLeftPyramid() {
		int rows = this.getNoOfRow();
		for (int i = rows; i >= 1; i--) {
			// Print leading spaces
			for (int s = 0; s < rows - i; s++) {
				System.out.print("    "); // 4 spaces for alignment
			}
			int num = 1;
			for (int j = 1; j <= i; j++) {
				System.out.printf("%4d", num);
				num *= 2;
			}
			System.out.println();
		}
	}

	public void printInvertedFullPyramid() {
		int rows = this.getNoOfRow();
		for (int i = rows; i >= 1; i--) {
			// Print leading spaces
			for (int s = 1; s <= rows - i; s++) {
				System.out.print("    "); // Adjust space for alignment
			}
			int num = 1;
			// Ascending sequence (1, 2, 4, ...)
			for (int j = 1; j <= i; j++) {
				System.out.printf("%-4d", num);
				num *= 2; // Double the number
			}
			num /= 2; // Adjust for mirroring
			// Descending sequence (..., 4, 2, 1)
			for (int j = 1; j < i; j++) {
				num /= 2;
				System.out.printf("%-4d", num);
			}
			System.out.println();
		}
	}

	public void printPascalsPyramid() {
		int rows = this.getNoOfRow();
		for (int i = 0; i < rows; i++) {
			// Print leading spaces
			for (int s = 0; s < rows - i; s++) {
				System.out.print("   ");
			}
			int num = 1;
			for (int j = 0; j <= i; j++) {
				System.out.printf("%6d", num);
				num = num * (i - j) / (j + 1); // Compute Pascal's Triangle values
			}
			System.out.println();
		}
	}

	public void printFloydsTriangle() {
		int rows = this.getNoOfRow();
		int num = 1;
		for (int i = 1; i <= rows; i++) {
			for (int j = 1; j <= i; j++) {
				System.out.printf("%-4d", num++);
			}
			System.out.println();
		}
	}

}
