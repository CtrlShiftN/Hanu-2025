package com.hanu.se.pr2.lect.week08.exceptions.tut;

import java.util.Scanner;

public class IntegerSumTest {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		System.out.println("Enter a sequence of integers (terminate with 0): ");
		String input = sc.nextLine();
		try {
			IntegerSum calculator = new IntegerSum(input);
			System.out.println(calculator.getTotal());
		} catch (Exception e) {
			System.out.println(e.getMessage());
		} finally {
			sc.close();
		}

	}

}
