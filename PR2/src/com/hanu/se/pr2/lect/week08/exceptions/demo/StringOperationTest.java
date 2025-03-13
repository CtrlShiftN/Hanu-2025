package com.hanu.se.pr2.lect.week08.exceptions.demo;

import java.util.Scanner;

public class StringOperationTest {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		try {
			System.out.println("Enter a string: ");
			String anyTestStr = sc.nextLine();
			StringOperation st = new StringOperation(anyTestStr);

			st.reverseString();
			System.out.println(st);

			st.countVowelsAndConsonants();
			System.out.println(st);

			st.displayCharactersAtEvenPositions();
			System.out.println(st);

			st.displayCharactersAtOddPositions();
			System.out.println(st);

			st.countUppercaseAndLowercaseLetters();
			System.out.println(st);

			st.calculateOccurrenceOfEachCharacter();
			System.out.println(st);

			st.extractSubstring(1, 3);
			System.out.println(st);

			st.findIndexOfFirstOccurrence("is");
			System.out.println(st);

			st.findIndexOfLastOccurrence("is");
			System.out.println(st);

			st.divideStringAtSeparator(" ");
			System.out.println(st);

		} catch (Exception e) {
			System.out.println(e.getMessage());
		}

		sc.close();
	}

}
