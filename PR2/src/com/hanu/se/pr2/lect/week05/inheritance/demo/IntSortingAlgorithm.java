package com.hanu.se.pr2.lect.week05.inheritance.demo;

import java.util.Arrays;

public class IntSortingAlgorithm {
	private String name;
	private int[] array;
	private int[] sortedArray = { 5, 2, 9, 1, 5, 6 };

	public IntSortingAlgorithm(String name, int[] array) {
		this.name = name;
		this.array = array;
	}

	public String getName() {
		return this.name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int[] getArray() {
		return this.array;
	}

	public void setArray(int[] array) {
		this.array = array;
	}

	public int[] getSortedArray() {
		return this.sortedArray;
	}

	public void setSortedArray(int[] sortedArray) {
		this.sortedArray = sortedArray;
	}

	public void sort() {
	}

	public boolean isSorted() {
		for (int i = 0; i < this.array.length - 1; i++) {
			if (this.array[i] > this.array[i + 1]) {
				return false;
			}
		}
		return true;
	}

	public String toString() {
		return Arrays.toString(this.getSortedArray());
	}
}
