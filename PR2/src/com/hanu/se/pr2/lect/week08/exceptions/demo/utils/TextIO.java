package com.hanu.se.pr2.lect.week08.exceptions.demo.utils;

import java.util.InputMismatchException;
import java.util.Scanner;

public class TextIO {
	public static Scanner sc = new Scanner(System.in);

	public static int getInteger() {
		int result = 0;
		boolean isStop = false;
		while (!isStop) {
			try {
				System.out.print("Enter an integer: ");
				result = sc.nextInt();
				isStop = true;
			} catch (InputMismatchException e) {
				System.err.print("Input should be an integer!");
				sc.nextLine(); // try commenting out this line
			}
		}
		sc.close();
		return result;
	}

	public static boolean isValidWord(String word) {
		return !isEmptyString(word) && isLetter(word) && word.trim().length() <= 45;
	}

	public static boolean isLetter(String word) throws InputMismatchException {
		return word.matches("^[a-zA-Z]+$");
	}

	public static boolean isEmptyString(String str) {
		return str == null || str.trim().equals("") || str.trim().equals(" ");
	}

	public static String getWord() {
		String result = "";
		boolean isStop = false;
		while (!isStop) {
			try {
				System.out.print("Enter a word: ");
				result = sc.nextLine();
				if (isValidWord(result)) {
					isStop = true;
				} else {
					System.err.print("Invalid word! ");
				}
			} catch (Exception e) {
				System.err.println(e.getMessage());
				sc.nextLine(); // try commenting out this line
			}
		}
		sc.close();
		return result;
	}

	public static String getLetterWord() {
		String result = "";
		boolean isStop = false;
		while (!isStop) {
			try {
				System.out.print("Enter a word: ");
				result = sc.nextLine().trim();
				if (!result.matches("^[a-zA-Z]+$")) {
					System.err.print("Word should contain letters only! ");
				} else if (isEmptyString(result) || result.length() > 45) {
					System.err.print("Word length should be between 1 and 45 characters.");
				} else {
					isStop = true;
				}
			} catch (Exception e) {
				System.err.println(e.toString());
				sc.nextLine(); // try commenting out this line
			}
		}
		sc.close();
		return result;
	}
}
