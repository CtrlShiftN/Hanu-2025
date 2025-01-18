package com.hanu.se.pr2.lect.week02.demo;

public class CommonBitFinder {

	public static void main(String[] args) {
//		System.out.println("Lowest common bit position: " + lowestCommonBit(22, 26)); // 1
//		System.out.println("Lowest common bit position: " + lowestCommonBit(8, 16)); // -1
//		System.out.println("Lowest common bit position: " + lowestCommonBit(15, 7)); // 0
//		System.out.println("Lowest common bit position: " + lowestCommonBit(14, 25)); // 3

		System.out.println("Lowest common bit position: " + findCommonBit(22, 26)); // 1
		System.out.println("Lowest common bit position: " + findCommonBit(8, 16)); // -1
		System.out.println("Lowest common bit position: " + findCommonBit(15, 7)); // 0
		System.out.println("Lowest common bit position: " + findCommonBit(14, 25)); // 3
	}

	public static int lowestCommonBit(int num1, int num2) {
		// Method 01. Convert into bin then compare
		// Method 02. bitwise AND
		long commonBits = num1 & num2;
		// 22 = 10110,
		// 26 = 11010,
		// 18 = 10010
		// if no common
		if (commonBits == 0) {
			return -1;
		}

		int position = 0;
		// 18 = 10100 & 1 = 00001 => position = 0, ++
		// first: 10100 & 0001 => 1, position = 1
		while ((commonBits & 1) == 0) {
			commonBits >>= 1;
			position++;
		}

//		System.out.println();
		return position;
	}

	public static String dec2Bin(int decimalNumber) {
		String binStr = "";
		// Size of an integer is assumed to be 32 bits
		for (int i = 7; i >= 0; i--) {
			int k = decimalNumber >> i;
			if ((k & 1) > 0)
				binStr += "1";
			else
				binStr += "0";
		}
		return binStr;
	}

	public static int findCommonBit(int num1, int num2) {
		String bin1 = dec2Bin(num1);
//		System.out.println(num1 + ": " + bin1);
		String bin2 = dec2Bin(num2);
//		System.out.println(num2 + ": " + bin2);
		int position = 0;
		for (int i = bin1.length() - 1; i >= 0; i--) {
			if (bin1.charAt(i) == bin2.charAt(i) && bin1.charAt(i) == '1') {
				break;
			}
			position++;
		}
		return position == bin1.length() ? -1 : position;
	}

}
