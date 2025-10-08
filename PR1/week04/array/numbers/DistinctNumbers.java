package week04.array.numbers;

import java.util.*;

public class DistinctNumbers {

	public static void main(String[] args) {
		// Declaration
		Scanner sc = new Scanner(System.in);
		int[] numbers = new int[10];
		boolean isExisted = false;
		int count = 0;

		// Prompt user to input 10 numbers
		System.out.println("Enter 10 integers: ");
		for (int i = 0; i < numbers.length; i++) {
			isExisted = false;
			int temp = sc.nextInt();
			for (int j = 0; j <= i; j++) {
				if (numbers[j] == temp) {
					isExisted = true;
					break;
				}
			}
			if (!isExisted) {
				numbers[count] = temp;
				count++;
			}
		}

		// Process
		// Display
		System.out.println("The number of distinct numbers is " + numbers.length);
		System.out.print("The distinct numbers are: ");
		for (int i = 0; i < count; i++) {
			System.out.print(numbers[i] + " ");
		}
	}

}
