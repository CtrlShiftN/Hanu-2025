package com.hanu.se.pr2.lect.week08.exceptions.tut;

public class PyramidGenerator {
	private int row;

	public PyramidGenerator(int row) throws InvalidInputException {
		if (!isValidRow(row)) {
			throw new InvalidInputException("Number of row should be between 0 and 10!");
		}
		this.row = row;
	}

	public int getRow() {
		return this.row;
	}

	public void setRow(int row) throws InvalidInputException {
		if (!isValidRow(row)) {
			throw new InvalidInputException("Number of row should be between 0 and 10!");
		}
		this.row = row;
	}

	private boolean isValidRow(int row) {
		return row >= 1 && row <= 9;
	}

	public String toString() {
		return "PyramidGenerator[row=" + this.getRow() + "]";
	}

	public void printHalfRightPyramid() {
		int rows = this.getRow();
		for (int i = 1; i <= rows; i++) {
			int num = (int) Math.pow(2, i - 1); // Start from 2^(i-1)
			for (int j = 1; j <= i; j++) {
				System.out.printf("%-4d", num);
				num /= 2; // Halve the number for the next position
			}
			System.out.println();
		}
	}

}
