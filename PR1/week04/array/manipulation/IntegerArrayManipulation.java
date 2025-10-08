package week04.array.manipulation;

public class IntegerArrayManipulation {

	public static void main(String[] args) {
		// Allocate an array a of ten integers.
		int[] myInts = new int[10];

		// Put the number 17 as the initial element of the array.
		myInts[0] = 17;

		// Put the number 29 as the last element of the array
		myInts[myInts.length - 1] = 29;

		// Fill the remaining elements with -1
		for (int i = 1; i < myInts.length - 1; i++) {
			myInts[i] = -1;
		}

		// Add 1 to each element of the array
		for (int i = 0; i < myInts.length; i++) {
			myInts[i] += 1;
		}

		// Print all elements of the array, one per line
		for (int i = 0; i < myInts.length; i++) {
			System.out.println(myInts[i]);
		}

		// Print all elements of the array in a single line, separated by commas
		for (int i = 0; i < myInts.length; i++) {
			System.out.print(myInts[i] + ",");
		}

	}

}
