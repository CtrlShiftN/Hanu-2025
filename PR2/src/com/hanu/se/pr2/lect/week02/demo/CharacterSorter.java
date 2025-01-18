package com.hanu.se.pr2.lect.week02.demo;

public class CharacterSorter {
	public static void main(String[] args) {
		System.out.println(sortCharacters("acb")); // abc
		System.out.println(sortCharacters("banana")); // aaabnn
		System.out.println(sortCharacters("a1b2c3d4")); // 1234abcd
	}

	public static String sortCharacters(String s) {
		// String to char
		char[] charSeq = s.toCharArray();
		// Sort
		bubbleSort(charSeq);
		return new String(charSeq);
	}

	public static void bubbleSort(char[] arr) {
		int charLength = arr.length;
		boolean isSwapped;
		for (int i = 0; i < arr.length - 1; i++) {
			isSwapped = false;
			for (int j = 0; j < charLength - i - 1; j++) {
				if (arr[j] > arr[j + 1]) {
					// Swap
					char temp = arr[j];
					arr[j] = arr[j + 1];
					arr[j + 1] = temp;
					isSwapped = true;
				}
			}
			if (!isSwapped) {
				break;
			}
		}
	}
}
