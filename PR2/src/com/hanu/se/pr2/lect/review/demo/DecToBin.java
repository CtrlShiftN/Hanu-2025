package com.hanu.se.pr2.lect.review.demo;

public class DecToBin {

	public static void main(String[] args) {
		System.out.println(decimalToBinary(-1));
		System.out.println(decimalToBinary(0));
		System.out.println(decimalToBinary(5));
		System.out.println(decimalToBinary(3000000));
	}

	public static String decimalToBinary(int number) {
		if (number < 0) {
			return "Invalid decimal: Decimal should be an integer that is positive and smaller than or equal to 2147483647.";
		} else if (number == 0) {
			return "0";
		} else {
			String binary = "";
			while (number > 0) {
				binary = (number % 2) + binary;
				number /= 2;
			}
			return binary;
		}
	}

}
