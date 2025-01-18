package com.hanu.se.pr2.lect.week02.demo;

public class MarkovMatrix {

	public static void main(String[] args) {
		// markov case
		double[][] markovMatrix = { { 0.15, 0.875, 0.375 }, { 0.55, 0.005, 0.225 }, { 0.30, 0.12, 0.4 } };
		// not markov matrix 1
		double[][] notMarkovMatrix = { { 0.15, 0.875, 0.375 }, { 0.55, 0.005, 0.225 }, { 0.30, 0.12, 0.45 } };
		// not markov matrix 2
		double[][] negativeMatrix = { { 0.15, -0.875, 0.375 }, { 0.55, 0.005, 0.225 }, { 0.30, 0.12, -0.4 } };
		// result
		System.out.println("Is markov matrix? " + isMarkovMatrix(markovMatrix));
		System.out.println("Is markov matrix? " + isMarkovMatrix(notMarkovMatrix));
		System.out.println("Is markov matrix? " + isMarkovMatrix(negativeMatrix));
	}

	public static boolean isMarkovMatrix(double[][] matrix) {
		double[] sum = new double[matrix.length];
		for (int row = 0; row < matrix.length; row++) {
			for (int col = 0; col < matrix[row].length; col++) {
				if (matrix[row][col] < 0.0) {
					return false;
				} else {
					sum[col] += matrix[row][col];
				}
			}
		}
		for (int i = 0; i < sum.length; i++) {
			if (sum[i] != 1.0) {
				return false;
			}
		}
		return true;
	}

}
