package com.hanu.se.pr2.lect.week09.io.demo;

import java.io.FileOutputStream;
import java.io.IOException;
import java.io.ObjectOutputStream;
import java.io.Serializable;
import java.util.Arrays;

public class Matrix implements Serializable {
	private int rows;
	private int cols;
	private double[][] data;

	public Matrix(int rows, int cols) throws NotPossibleException {
		if (!isValid(rows)) {
			throw new NotPossibleException("Invalid Matrix Rows");
		}
		if (!isValid(cols)) {
			throw new NotPossibleException("Invalid Matrix Cols");
		}
		this.rows = rows;
		this.cols = cols;
		this.data = new double[rows][cols];
	}

	public int getRows() {
		return this.rows;
	}

	public void setRows(int rows) throws NotPossibleException {
		if (!isValid(rows)) {
			throw new NotPossibleException("Invalid Matrix Rows");
		}
		this.rows = rows;
	}

	public int getCols() {
		return this.cols;
	}

	public void setCols(int cols) throws NotPossibleException {
		if (!isValid(cols)) {
			throw new NotPossibleException("Invalid Matrix Cols");
		}
		this.cols = cols;
	}

	public double[][] getData() {
		return this.data;
	}

	public void setData(double[][] data) throws NotPossibleException {
		if (!isValidData(data)) {
			throw new NotPossibleException("Invalid Matrix Data");
		}
		this.data = data;
	}

	private boolean isValid(int num) {
		return num > 0;
	}

	private boolean isValidData(double[][] data) {
		return data.length == this.getRows() && data[0].length == this.getCols();
	}

	// Save matrix to file
	public void save(String filename) throws IOException {
		try {
			XFileExtended.writeObject(filename, this);
		} catch (Exception e) {
			throw new IOException("IOException: " + e.getMessage());
		}
	}

	// Read matrix from file
	public static Matrix read(String filename) throws NotPossibleException {
		try {
			return (Matrix) XFileExtended.readObject(filename);
		} catch (Exception e) {
			throw new NotPossibleException(e.getMessage());
		}
	}

	// Sum of two matrices
	public Matrix sum(Matrix m) throws NotPossibleException {
		if (this.rows != m.rows || this.cols != m.cols) {
			return null;
		}
		try {
			Matrix result = new Matrix(rows, cols);
			for (int i = 0; i < rows; i++) {
				for (int j = 0; j < cols; j++) {
					result.data[i][j] = this.data[i][j] + m.data[i][j];
				}
			}
			return result;
		} catch (Exception e) {
			throw new NotPossibleException(e.getMessage());
		}
		
	}
	public double[][] transpose() {
        int rows = this.getRows();
        int cols = this.getCols();
        double[][] transposed = new double[cols][rows];

        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < cols; j++) {
                transposed[j][i] = this.getData()[i][j];
            }
        }
        return transposed;
    }

	// Matrix multiplication
	public Matrix product(Matrix m) throws NotPossibleException {
		if (this.cols != m.rows) {
			return null;
		}
		try {
			Matrix result = new Matrix(this.rows, m.cols);
			for (int i = 0; i < this.rows; i++) {
				for (int j = 0; j < m.cols; j++) {
					for (int k = 0; k < this.cols; k++) {
						result.data[i][j] += this.data[i][k] * m.data[k][j];
					}
				}
			}
			return result;
		} catch (Exception e) {
			throw new NotPossibleException(e.getMessage());
		}
		
	}

	// Method to set a value in the matrix
	public void setValue(int i, int j, double value) {
		if (i >= 0 && i < rows && j >= 0 && j < cols) {
			data[i][j] = value;
		}
	}

	// Print matrix for debugging
	public void print() {
		for (double[] row : data) {
			System.out.println(Arrays.toString(row));
		}
	}

}
