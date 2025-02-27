package com.hanu.se.pr2.lect.week05.demo;

import java.util.Arrays;

//Superclass: IntSortingAlgorithm
abstract class IntSortingAlgorithm {
	private String name;
	private int[] array;
	private int[] sortedArray;

	// Constructor
	public IntSortingAlgorithm(String name, int[] array) {
		this.name = name;
		this.array = array.clone(); // Clone to avoid modifying the original array
		this.sortedArray = new int[array.length];
	}

	// Abstract method to be implemented by subclasses
	public abstract void sort();

	// Method to check if the array is sorted
	public boolean isSorted() {
		for (int i = 0; i < sortedArray.length - 1; i++) {
			if (sortedArray[i] > sortedArray[i + 1]) {
				return false;
			}
		}
		return true;
	}

	// Getter methods
	public String getName() {
		return name;
	}

	public int[] getSortedArray() {
		return sortedArray;
	}

	// toString method to display sorted array
	@Override
	public String toString() {
		return name + " Sorted Array: " + Arrays.toString(sortedArray);
	}
}

//Bubble Sort Algorithm
class BubbleSort extends IntSortingAlgorithm {
	public BubbleSort(int[] array) {
		super("Bubble Sort", array);
	}

	@Override
	public void sort() {
		// TODO: implement this
	}
}

//Quick Sort Algorithm
class QuickSort extends IntSortingAlgorithm {
	public QuickSort(int[] array) {
		super("Quick Sort", array);
	}

	@Override
	public void sort() {
		// TODO: implement this
	}

	private void quickSort(int[] arr, int low, int high) {
		if (low < high) {
			int pi = partition(arr, low, high);
			quickSort(arr, low, pi - 1);
			quickSort(arr, pi + 1, high);
		}
	}

	private int partition(int[] arr, int low, int high) {
		int pivot = arr[high];
		int i = (low - 1);
		for (int j = low; j < high; j++) {
			if (arr[j] < pivot) {
				i++;
				int temp = arr[i];
				arr[i] = arr[j];
				arr[j] = temp;
			}
		}
		int temp = arr[i + 1];
		arr[i + 1] = arr[high];
		arr[high] = temp;
		return i + 1;
	}
}

//Merge Sort Algorithm
class MergeSort extends IntSortingAlgorithm {
	public MergeSort(int[] array) {
		super("Merge Sort", array);
	}

	@Override
	public void sort() {
		// TODO: implement this
	}

	private void mergeSort(int[] arr, int left, int right) {
		if (left < right) {
			int mid = (left + right) / 2;
			mergeSort(arr, left, mid);
			mergeSort(arr, mid + 1, right);
			merge(arr, left, mid, right);
		}
	}

	private void merge(int[] arr, int left, int mid, int right) {
		int n1 = mid - left + 1;
		int n2 = right - mid;
		int[] leftArray = new int[n1];
		int[] rightArray = new int[n2];

		System.arraycopy(arr, left, leftArray, 0, n1);
		System.arraycopy(arr, mid + 1, rightArray, 0, n2);

		int i = 0, j = 0, k = left;
		while (i < n1 && j < n2) {
			if (leftArray[i] <= rightArray[j]) {
				arr[k++] = leftArray[i++];
			} else {
				arr[k++] = rightArray[j++];
			}
		}

		while (i < n1) {
			arr[k++] = leftArray[i++];
		}

		while (j < n2) {
			arr[k++] = rightArray[j++];
		}
	}
}
