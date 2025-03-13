package com.hanu.se.pr2.lect.week08.exceptions.tut;

import java.util.HashMap;

public class LetterOccurrence {
	private String word;

	public LetterOccurrence(String word) throws InvalidInputException, WordLengthException {
		if (!isValidWordLength(word)) {
			throw new WordLengthException("Word length should be between 1 and 45 characters.");
		}
		if (!isValidWordPattern(word)) {
			throw new InvalidInputException("Word should not be empty, it should contain only letters!");
		}
		this.word = word.trim();
	}

	public String getWord() {
		return this.word;
	}

	public void setWord(String word) throws InvalidInputException, WordLengthException {
		if (!isValidWordLength(word)) {
			throw new WordLengthException("Word length should be between 1 and 45 characters.");
		}
		if (!isValidWordPattern(word)) {
			throw new InvalidInputException("Word should not be empty, it should contain only letters!");
		}
		this.word = word.trim();
	}

	private boolean isValidWordLength(String word) {
		return word != null && word.trim().length() > 0 && word.trim().length() <= 45;
	}

	private boolean isValidWordPattern(String word) {
		return word.trim().matches("^[a-zA-Z]+$");
	}

	public String toString() {
		return "LetterOccurrence[{word=" + this.getWord() + "} contains " + this.getLetterOccurrence().toString() + "]";
	}

	public HashMap<String, Integer> getLetterOccurrence() {
		HashMap<String, Integer> letterOccurrence = new HashMap<>();
		String word = this.getWord().trim();
		char[] charArr = word.toCharArray();
		for (char c : charArr) {
			String str = String.valueOf(c);
			letterOccurrence.put(str, letterOccurrence.getOrDefault(str, 0) + 1);
		}
		return letterOccurrence;
	}
}
