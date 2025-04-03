package com.hanu.se.pr2.lect.week09.io.demo;

public class MatrixTest {

	public static void main(String[] args) {
		try {
			Matrix A = new Matrix(2, 3);
			A.setValue(0, 0, 3.8);
			A.setValue(0, 1, 2);
			A.setValue(0, 2, 3);
			A.setValue(1, 0, 4.2);
			A.setValue(1, 1, 5);
			A.setValue(1, 2, 6);

			Matrix B = new Matrix(2, 3);
			B.setValue(0, 0, 3);
			B.setValue(0, 1, 6);
			B.setValue(0, 2, 9);
			B.setValue(1, 0, 20.4);
			B.setValue(1, 1, 6.3);
			B.setValue(1, 2, 4.7);

			System.out.println("Matrix A:");
			A.print();

			System.out.println("\nMatrix B:");
			B.print();

			System.out.println("\nSum of A and B:");
			Matrix sum = A.sum(B);
			if (sum != null) {
				sum.print();
			} else {
				System.out.println("Cannot sum matrices with different dimensions.");
			}

			double[][] transposeB = B.transpose();
			Matrix C = new Matrix(transposeB.length, transposeB[0].length);
			C.setData(transposeB);
			System.out.println("\nMatrix C:");
			C.print();

			System.out.println("\nProduct of A and C:");
			Matrix product = A.product(C);
			if (product != null) {
				product.print();
			} else {
				System.out.println("No product!");
			}
			System.out.println("\nWriting product to file...");
			product.save("./src/demo/matrix.dat");
			System.out.println("\nWrite Matrix to File Successfully!");
			Matrix loaded = Matrix.read("./src/demo/matrix.dat");
			System.out.println("\nLoaded Matrix from file:");
			loaded.print();

		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
	}

}
