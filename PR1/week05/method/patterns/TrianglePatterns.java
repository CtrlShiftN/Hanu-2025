package week05.method.patterns;

import java.util.*;

public class TrianglePatterns {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int line;
		
		System.out.println("Enter a number of rows: ");
		line = sc.nextInt();
		
		if (line >= 1 && line <= 9) {
			System.out.println("Pattern A");
			printBottomLeftPattern(line);
			System.out.println("Pattern B");
			printTopLeftPattern(line);
			System.out.println("Pattern C");
			printBottomRightPattern(line);
			System.out.println("Pattern D");
			printTopRightPattern(line);
		}else {
			System.out.println("Invalid number of rows: Should be an integer from 1 to 9.");
		}
	}
	
	/*
	 * Pattern A: 
	 * 	1
	 * 	1 2
	 *  1 2 3
	 *  1 2 3 4
	 *  
	 */
	public static void printBottomLeftPattern(int line) {
		
		for (int i = 1; i <= line; i++) {
			for (int j = 1; j <= i; j++) {
				System.out.print(j + " ");
			}
			System.out.println();
		}
	}
	
	/*
	 * Pattern B: 
	 *  1 2 3 4
	 *  1 2 3
	 *  1 2
	 *  1
	 *  
	 */
	public static void printTopLeftPattern(int line) {
		for (int i = line; i >= 1; i--) {
			for (int j = 1; j <= i; j++) {
				System.out.print(j + " ");
			}
			System.out.println();
		}
	}
	
	/*
	 * Pattern C: 
	 *        1
	 *      2 1
	 * 	  3 2 1
	 * 	4 3 2 1
	 *    
	 */
	public static void printBottomRightPattern(int line) {
		for (int i = 1; i <= line; i++) {
			for (int j = 1; j <= line - i; j++) {
				System.out.print("  ");
			}
			for (int k = i; k >= 1; k--) {
				System.out.print(k + " ");
			}
			System.out.println();
		}
	}
	
	/*
	 * Pattern D: 
	 * 	1 2 3 4
	 *    1 2 3
	 *      1 2
	 *        1
	 *    
	 */
	public static void printTopRightPattern(int line) {
		for (int i = line; i >= 1; i--) {
			for (int j = 1; j <= line - i ; j++) {
				System.out.print("  ");
			}
			for (int k = 1; k <= i; k++) {
				System.out.print(k + " ");
			}
			System.out.println();
		}
	}
	
	/*
	 *  Pattern Pyramid (Pattern C + Pattern A)
	 *           *
	 *          * *
	 *  	   * * *
	 *        * * * * 
	 *  
	 */
	public static void printPyramidPattern(int row) {
		for (int i = 1; i <= row; i++) {
			// spaces
			for (int j = 1; j <= row - i; j++) {
				System.out.printf("%2s", " ");
			}
			// left side numbers
			for (int k = i; k >= 1; k--) {
				System.out.printf("%2s","*");
			}
			// right side numbers
			for (int j = 2; j <= i; j++) {
				System.out.printf("%2s","*");
			}
			// end of line
			System.out.println();
		}
	}
}
