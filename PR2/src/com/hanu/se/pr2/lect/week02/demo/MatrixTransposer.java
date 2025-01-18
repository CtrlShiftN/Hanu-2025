package com.hanu.se.pr2.lect.week02.demo;

public class MatrixTransposer {

	public static void main(String[] args) {
		// Example 2D array
		int[][] matrix = { { 1, 2, 3 }, { 4, 5, 6 }, { 7, 8, 9 } };

		System.out.println("Original Matrix:");
		print2DArray(matrix);

		// Compute the transpose
		int[][] transposedMatrix = transpose(matrix);

		System.out.println("\nTransposed Matrix:");
		print2DArray(transposedMatrix);
	}

	public static void print2DArray(int[][] matrix) {
		for (int row = 0; row < matrix.length; row++) {
			for (int col = 0; col < matrix[row].length; col++) {
				System.out.print(matrix[row][col] + " ");
			}
			System.out.println();
		}
	}
	
	public static int[][] transpose(int[][] matrix) {
		// matrix m x n => n x m
		int m = matrix.length;
		int n = matrix[0].length;
		int[][] transposedMatrix = new int[n][m];
		// transpose
		for (int row = 0; row < matrix.length; row++) {
			for (int col = 0; col < matrix[row].length; col++) {
				transposedMatrix[col][row] = matrix[row][col];
			}
		}
		return transposedMatrix;
	}

}
