package week04.array.sequence;

import java.util.*;

public class FibonacciSeries2 {
	public static void main(String[] args) {
		// Declaration
		Scanner sc = new Scanner(System.in);
		int fibonacciLimit;
		int first = 0, second = 1, current = first + second;
		
		// Prompt user to input s.th
		System.out.println("Enter the fibonacci limit: ");
		fibonacciLimit = sc.nextInt();
		
		// Process
		System.out.print(first + " ");
		System.out.print(second + " ");
		while(current <= fibonacciLimit) {
			System.out.print(current + " ");
			first = second;
			second = current;
			current = first + second;
		}
		
		// Display || return
	}
}
