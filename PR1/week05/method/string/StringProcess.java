package week05.method.string;

import java.util.*;

public class StringProcess {
	public static void main(String[] args) {
		// Declaration
		Scanner sc = new Scanner(System.in);
		String userInput;
		char[] str;

		// Prompt user to input a string
		System.out.println("Enter a string: ");
		userInput = sc.nextLine();
		str = new char[userInput.length()];

		// Process
		// "abc, defg" => {'a', 'b', 'c', ',', ' ', 'd', 'e', 'f', 'g'}
		for (int i = 0; i < str.length; i++) {
			str[i] = userInput.charAt(i);
		}
		// Print the upper-case letters in the string
		printAllUppercaseLetter(str);
		// Print every second letter of the string, ignoring other characters such as
		// spaces and symbols
		printEverySecondLetter(str);
		// Print the string, with all vowels replaced by an underscore
		printStringIgnoreVowel(str);
		// Print the number of vowels in the string
		printAmountOfVewel(str);
		// Print the positions of all vowels in the string
		printVowelPosition(str);

		// Display
	}

	public static void printAllUppercaseLetter(char[] str) {
		System.out.println("The upper-case letters: ");
		for (int i = 0; i < str.length; i++) {
			if (Character.isUpperCase(str[i])) {
				System.out.print(str[i] + " ");
			}
		}
	}

	public static void printEverySecondLetter(char[] str) {
		System.out.println("The every-second letters: ");
		int count = 0;
		for (int i = 0; i < str.length; i++) {
			if (Character.isLetter(str[i])) {
				if (count % 2 == 0) {
					System.out.print(str[i] + "");
				}
				count++;
			}
		}
	}

	public static boolean isVowel(char letter) {
		char lowercaseChar = Character.toLowerCase(letter);
		return lowercaseChar == 'u' || lowercaseChar == 'e' || lowercaseChar == 'o' || lowercaseChar == 'a'
				|| lowercaseChar == 'i';
	}

	public static void printStringIgnoreVowel(char[] str) {
		System.out.println("The string with vowels = underscore: ");
		for (int i = 0; i < str.length; i++) {
			if (isVowel(str[i])) {
				System.out.print('_');
			} else {
				System.out.print(str[i]);
			}
		}
	}

	public static void printAmountOfVewel(char[] str) {
		System.out.print("\nThe amount of vowels: ");
		int count = 0;
		for (int i = 0; i < str.length; i++) {
			if (isVowel(str[i])) {
				count++;
			}
		}
		System.out.print(count + "\n");
	}

	public static void printVowelPosition(char[] str) {
		System.out.println("The vowels' position: ");
		for (int i = 0; i < str.length; i++) {
			if (isVowel(str[i])) {
				System.out.print(i + " ");
			}
		}
	}
}
