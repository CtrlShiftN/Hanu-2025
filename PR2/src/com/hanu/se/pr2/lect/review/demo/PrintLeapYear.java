package com.hanu.se.pr2.lect.review.demo;

public class PrintLeapYear {
	public static void main(String[] args) {
		int startYear = 101;
		int endYear = 2100;
		int count = 0;
		System.out.println("All the leap years from 101 to 2100:");
		for (int i = startYear; i <= endYear; i++) {
			if (isLeapYear(i)) {
				System.out.print(i + " ");
				count++;
				if (count > 0 && count % 10 == 0) {
					System.out.println();
				}
			}
		}
		System.out.println();
		System.out.println("Total number of leap years in this period: " + count);

	}

	public static boolean isLeapYear(int year) {
		return (year % 4 == 0 && year % 100 != 0) || (year % 100 == 0 && year % 400 == 0);
	}
}
