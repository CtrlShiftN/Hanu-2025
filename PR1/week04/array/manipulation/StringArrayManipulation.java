package week04.array.manipulation;

public class StringArrayManipulation {

	public static void main(String[] args) {
		// Note: Do not create another array to hold the result.
//		1. Declares an array of Strings.
		String[] myStrings = { "Welcome", "to", "Java", "Programming", "01", "F2025" };

//		2. Prints out all the elements of this String array once.
		for (int i = 0; i < myStrings.length; i++) {
			System.out.print(myStrings[i] + " ");
		}

//		3. Reverses the order of values in the String array.
		int left = 0, right = myStrings.length - 1;
		while (left <= right) {
			String temp = myStrings[left];
			myStrings[left] = myStrings[right];
			myStrings[right] = temp;
			left++;
			right--;
		}

//		4. Prints out all the elements of this String array again (after reversing the order).
		System.out.println();
		for (int i = 0; i < myStrings.length; i++) {
			System.out.print(myStrings[i] + " ");
		}
	}

}
