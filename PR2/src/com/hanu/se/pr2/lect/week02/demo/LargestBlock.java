package com.hanu.se.pr2.lect.week02.demo;

public class LargestBlock {

	public static void main(String[] args) {
		int[][] matrix = { 
				{ 1, 0, 1, 0, 1 },
				{ 1, 1, 1, 0, 1 },
				{ 1, 0, 1, 1, 1 },
				{ 1, 0, 1, 1, 1 },
				{ 1, 0, 1, 1, 1 } };
		System.out.println("Largest block size: " + findLargestBlock(matrix));
	}

	public static int findLargestBlock(int[][] matrix) {
		int[][] dp = new int[matrix.length][matrix.length];
		int maxSize = 0;
		int maxRow = 0;
		int maxCol = 0;
		// fill the array
		for (int row = 0; row < dp.length; row++) {
			for (int col = 0; col < dp.length; col++) {
				if (row == 0 || col == 0) {
					dp[row][col] = matrix[row][col];
					System.out.print(dp[row][col] + " ");
				} else if (matrix[row][col] == 1) {
					dp[row][col] = Math.min(Math.min(dp[row - 1][col], dp[row][col - 1]), dp[row - 1][col - 1]) + 1;
					System.out.print(dp[row][col] + " ");
				} else {
					dp[row][col] = 0;
					System.out.print(dp[row][col] + " ");
				}
				// update max size + position
				if (dp[row][col] > maxSize) {
					maxSize = dp[row][col];
					maxRow = row;
					maxCol = col;
				}
			}
			System.out.println();
		}
		// Calculate position
		int x = maxRow - maxSize + 1;
		int y = maxCol - maxSize + 1;
		System.out.println("Position: " + x + " - " + y);
		return maxSize;
	}

}
