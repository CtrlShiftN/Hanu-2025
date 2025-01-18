package com.hanu.se.pr2.lect.week02.demo;

public class PartitionList {
	public static void main(String[] args) {
		int[] arr = { 10, 1, 5, 16, 61, 9, 11, 1 };
		int[] partition = partition(arr);
		for (int i = 0; i < partition.length; i++) {
			System.out.print(partition[i] + " ");
		}
	}

	public static int[] partition(int[] list) {
		int pivot = list[0];
		int low = 1;
		int high = list.length - 1;
		while (low <= high) {
			while (list[low] <= pivot) {
				low++;
			}
			while (list[high] > pivot) {
				high--;
			}
			// swap
			if (low < high) {
				int temp = list[low];
				list[low] = list[high];
				list[high] = temp;
			}
		}
		// place pivot to its position
		list[0] = list[high];
		list[high] = pivot;
		return list;
	}
}
