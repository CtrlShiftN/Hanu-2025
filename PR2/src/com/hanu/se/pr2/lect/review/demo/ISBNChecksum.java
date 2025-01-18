package com.hanu.se.pr2.lect.review.demo;

import java.util.*;

public class ISBNChecksum {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		System.out.println("Enter the first 12 digits of an ISBN-13 as a string:");
		String isbnStr = sc.nextLine();
		if (isValidISBN(isbnStr) && isbnStr.length() == 12) {
			int sum = 0;
			// Cal sum
			for (int i = 0; i < isbnStr.length(); i++) {
				char digitAtI = isbnStr.charAt(i);
				if (i % 2 == 0) {
					sum += Character.getNumericValue(digitAtI);
				} else {
					sum += 3 * Character.getNumericValue(digitAtI);
				}
			}
			// cal checksum
			int checksum = 10 - sum % 10;
			if (checksum == 10) {
				System.out.println("The ISBN-13 number is " + isbnStr + "0");
			} else {
				System.out.println("The ISBN-13 number is " + isbnStr + checksum);
			}
		} else {
			System.out.println(isbnStr + " is an invalid input");
		}
	}

	public static boolean isValidISBN(String isbn12) {
		for (int i = 0; i < isbn12.length(); i++) {
			if (!Character.isDigit(isbn12.charAt(i))) {
				return false;
			}
		}
		return true;
	}
}
