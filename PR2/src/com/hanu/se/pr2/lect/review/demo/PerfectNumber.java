package com.hanu.se.pr2.lect.review.demo;

public class PerfectNumber {

	public static void main(String[] args) {
		final int MAX = 10000;
		System.out.println("The four perfect numbers less than 10,000:");
		for (int i = 2; i < MAX; i++) {
			if (isPerfectNumber(i)) {
				System.out.println(i);
			}
		}

	}

	public static boolean isPerfectNumber(int number) {
		int sum = 0;
		for (int i = 1; i <= number / 2; i++) {
			if (number % i == 0) {
				sum += i;
			}
		}
		return sum == number;
	}

}
