package week09.algorithm.searching;

public class BinarySearch {

	public static void main(String[] args) {
		int[] arr = { 1, 3, 5, 8, 12, 15, 21 };
		int target = 15;
		System.out.println(binarySearch(arr, target));
	}

	public static int binarySearch(int[] arr, int key) {
		return binarySearch(arr, key, 0, arr.length - 1);
	}

	public static int binarySearch(int[] arr, int key, int low, int high) {
		// TODO: check if the array is sorted
		if (high < low) {
			return -1;
		}
		int mid = (low + high) / 2;
		if (arr[mid] == key) {
			return mid;
		} else if (arr[mid] > key) {
			return binarySearch(arr, key, low, mid - 1);
		} else {
			return binarySearch(arr, key, mid + 1, high);
		}
	}

}
