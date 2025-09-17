package week03.string.business;

import java.util.*;

public class ISBNTen {
	public static void main(String[] args) {
		// Declaration
		Scanner sc = new Scanner(System.in);
		String userInput;
		int d1, d2, d3, d4, d5, d6, d7, d8, d9, checksum;

		// Prompt user to input s.th
		System.out.println("Enter the first 9 digits of an ISBN as integer: ");
		userInput = sc.next();

		// Process
		d1 = Byte.parseByte(userInput.charAt(0) + "");
		d2 = Byte.parseByte(userInput.charAt(1) + "");
		d3 = Byte.parseByte(userInput.charAt(2) + "");
		d4 = Byte.parseByte(userInput.charAt(3) + "");
		d5 = Byte.parseByte(userInput.charAt(4) + "");
		d6 = Byte.parseByte(userInput.charAt(5) + "");
		d7 = Byte.parseByte(userInput.charAt(6) + "");
		d8 = Byte.parseByte(userInput.charAt(7) + "");
		d9 = Byte.parseByte(userInput.charAt(8) + "");

		checksum = (d1 + d2 * 2 + d3 * 3 + d4 * 4 + d5 * 5 + d6 * 6 + d7 * 7 + d8 * 8 + d9 * 9) % 11;

		// Display
		System.out.println(userInput + "" + ((checksum == 10) ? "X" : checksum));
	}
}
