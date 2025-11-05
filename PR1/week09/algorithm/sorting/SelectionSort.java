package week09.algorithm.sorting;

public class SelectionSort {
	public static void main(String[] args) {
		int[] arr = { 53, 65, 57, -4, 19, 91, 0, 89 };
		int[] sortedArr = selectionSort(arr);
		for (int i = 0; i < sortedArr.length; i++) {
			System.out.print(sortedArr[i] + " ");
		}
	}

	public static int[] selectionSort(int[] arr) {
		int[] sortedArr = new int[arr.length];
		for (int i = 0; i < arr.length; i++) {
			int minPosition = i;
			for (int j = i + 1; j < arr.length; j++) {
				if (arr[j] < arr[minPosition]) {
					minPosition = j;
				}
			}
			sortedArr[i] = arr[minPosition];
			arr[minPosition] = arr[i];
		}
		return sortedArr;
	}
}
