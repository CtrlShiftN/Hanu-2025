package com.hanu.se.pr2.lect.week08.exceptions.demo;

import java.util.Scanner;

public class IntegerSumTest {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		System.out.println("Enter a sequence of integers (terminate with 0): ");
		String input = scanner.nextLine();
		try {
			IntegerSum calculator = new IntegerSum(input);
			int result = calculator.getTotal();
			System.out.println("Sum of numbers: " + result);
		} catch (Exception e) {
			System.out.println(e.getMessage());
		} finally {
			scanner.close();
		}
	}
}
