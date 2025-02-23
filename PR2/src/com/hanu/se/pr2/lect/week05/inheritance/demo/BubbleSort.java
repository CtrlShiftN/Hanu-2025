package com.hanu.se.pr2.lect.week05.inheritance.demo;

public class BubbleSort extends IntSortingAlgorithm {
	public BubbleSort(int[] array) {
		super("Bubble Sort", array);
	}

	@Override
	public void sort() {
		int i, j, temp;
		boolean swapped;
		int[] intArr = this.getArray().clone();
		for (i = 0; i < intArr.length - 1; i++) {
			swapped = false;
			for (j = 0; j < intArr.length - i - 1; j++) {
				if (intArr[j] > intArr[j + 1]) {
					temp = intArr[j];
					intArr[j] = intArr[j + 1];
					intArr[j + 1] = temp;
					swapped = true;
				}
			}
			// If no two elements were
			// swapped by inner loop, then break
			if (swapped == false)
				break;
		}
		this.setSortedArray(intArr);
	}
}
