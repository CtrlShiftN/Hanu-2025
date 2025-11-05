package week09.algorithm.lecture.demo;

public class BubbleSort {
	public static void main(String[] args) {
		int[] arr = { -2, 1, -4, 0, 3, 2 };
		int[] b = bubbleSort(arr);
		for (int i = 0; i < b.length; i++) {
			System.out.print(b[i] + " ");
		}
	}

	public static int[] bubbleSort(int[] a) {
		for (int i = 1; i < a.length; i++) {
			for (int j = 0; j < a.length - 1; j++) {
				if (a[j] > a[j + 1]) {
					int temp = a[j];
					a[j] = a[j + 1];
					a[j + 1] = temp;
				}
			}
		}
		return a;
	}
}
