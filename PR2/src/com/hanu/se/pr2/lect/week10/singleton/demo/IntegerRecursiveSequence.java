package com.hanu.se.pr2.lect.week10.singleton.demo;

public class IntegerRecursiveSequence {
	private int count = 1;
	private static IntegerRecursiveSequence instance;

	private IntegerRecursiveSequence() {

	}

	public static IntegerRecursiveSequence getInstance() {
		if (instance == null) {
			instance = new IntegerRecursiveSequence();
		}
		return instance;
	}

	public int getCount() {
		return this.count;
	}

	public void setCount(int count) throws NotPossibleException {
		if (!isValidCount(count)) {
			throw new NotPossibleException("IntegerRecursiveSequence setter: Invalid count " + count);
		}
		this.count = count;
	}

	private boolean isValidCount(int count) {
		return count >= 1;
	}

	public void printEvenSequence() {
		int count = this.getCount();
		for (int i = 0; i < count; i++) {
			System.out.print(this.getEvenTerm(i));
			if (i < count - 1) {
				System.out.print(", "); // Add comma except for the last element
			}
		}
	}

	private int getEvenTerm(int n) {
		if (n == 0) {
			return 0;
		}
		return getEvenTerm(n - 1) + 2;
	}

	public void printTriangularSequence() {
		int count = this.getCount();
		for (int i = 0; i < count; i++) {
			System.out.print(this.getTriangularTerm(i));
			if (i < count - 1) {
				System.out.print(", "); // Add comma except for the last element
			}
		}
	}

	private int getTriangularTerm(int n) {
		if (n == 0) {
			return 0;
		}
		return getTriangularTerm(n - 1) + n;
	}
	
	public void printFibonacciSequence() {
		int count = this.getCount();
		for (int i = 0; i < count; i++) {
			System.out.print(this.fibonacci(i));
			if (i < count - 1) {
				System.out.print(", "); // Add comma except for the last element
			}
		}
	}

	private int fibonacci(int n) {
		if (n == 0) {
			return 0;
		}
		if (n == 1) {
			return 1;
		}
		return fibonacci(n - 1) + fibonacci(n - 2);
	}

	@Override
	public String toString() {
		return "IntegerRecursiveSequence[count=" + this.getCount() + "]";
	}
}
