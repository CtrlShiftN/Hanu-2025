package com.hanu.se.pr2.lect.week08.exceptions.demo;

import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

class InvalidInputException extends RuntimeException {
	public InvalidInputException(String message) {
		super("InvalidInputException: " + message);
	}
}

class WordLengthException extends RuntimeException {
	public WordLengthException(String message) {
		super("WordLengthException: " + message);
	}
}

public class LetterOccurrence {
	private String word;

	public LetterOccurrence(String word) {
		if (!isValidWord(word)) {
			throw new InvalidInputException("Word should not be empty, it should contain only letters!");
		}
		if (!isValidWordLength(word)) {
			throw new WordLengthException("Word length should be between 1 and 45 characters.");
		}
		this.word = word;
	}

	public String getWord() {
		return this.word;
	}

	public void setWord(String word) throws InvalidInputException {
		if (!isValidWord(word)) {
			throw new InvalidInputException("Word should not be empty, it should contain only letters!");
		}
		if (!isValidWordLength(word)) {
			throw new WordLengthException("Word length should be between 1 and 45 characters.");
		}
		this.word = word;
	}

	private boolean isValidWordLength(String word) {
		return word.length() <= 45;
	}

	private boolean isValidWord(String word) {
		return !isEmptyString(word) && isContainOnlyLetter(word);
	}

	private boolean isContainOnlyLetter(String str) {
		return str.matches("^[a-zA-Z]+$");
	}

	private boolean isEmptyString(String str) {
		return str == null || str.trim().equals("") || str.trim().equals(" ");
	}

	public HashMap<String, Integer> getLetterOccurrence() {
		String word = this.getWord();
		HashMap<String, Integer> occurrence = new HashMap<String, Integer>();
		for (int i = 0; i < word.length(); i++) {
			char wordAtI = word.charAt(i);
			String letterAtI = Character.toString(wordAtI);
			if (occurrence.containsKey(letterAtI)) {
				int currentOccurrence = occurrence.get(letterAtI);
				currentOccurrence += 1;
				occurrence.put(letterAtI, currentOccurrence);
			} else {
				occurrence.put(letterAtI, 1);
			}
		}
		return occurrence;
	}
	
	private static String getLetterWord(Scanner sc) {
		String result = "";
		boolean isStop = false;
		while (!isStop) {
			try {
				System.out.print("Enter a word: ");
				result = sc.nextLine().trim();
				if (!result.matches("^[a-zA-Z]+$")) {
					throw new InvalidInputException("Word should contain letters only! ");
				} else if (result == null || result.length() < 1 || result.length() > 45) {
					throw new WordLengthException("Word length should be between 1 and 45 characters.");
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

	public String toString() {
		HashMap<String, Integer> occurrence = getLetterOccurrence();
		StringBuilder result = new StringBuilder("LetterOccurrence[{word=" + this.getWord() + "} contains ");

		for (Map.Entry<String, Integer> entry : occurrence.entrySet()) {
			result.append(entry.getKey()).append(": ").append(entry.getValue()).append(", ");
		}

		if (!occurrence.isEmpty()) {
			result.setLength(result.length() - 2); // Remove the last comma and space
		}

		result.append("]");
		return result.toString();
	}
}
