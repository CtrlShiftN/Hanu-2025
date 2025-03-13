package com.hanu.se.pr2.lect.week08.exceptions.demo;

import java.util.HashMap;

public class StringOperation {
	private String inputString;
	private String output = null;

	public StringOperation(String inputString) throws InvalidInputException {
		if (!isValidInputString(inputString)) {
			throw new InvalidInputException("String should not contain only space!");
		}
		this.inputString = inputString;
	}

	public String getInputString() {
		return this.inputString;
	}

	public String getOutput() {
		return this.output;
	}

	public void setInputString(String inputString) throws InvalidInputException {
		if (!isValidInputString(inputString)) {
			throw new InvalidInputException("String should not contain only space!");
		}
		this.inputString = inputString;
	}

	public void setOutput(String output) {
		this.output = output;
	}

	private boolean isValidInputString(String inputString) {
		return inputString != null && inputString.trim().length() > 0;
	}

	public String toString() {
		return "StringOperator[input=" + this.getInputString() + ",output=" + this.getOutput() + "]";
	}

	public void reverseString() {
		String result = "";
		for (int i = this.getInputString().length() - 1; i >= 0; i--) {
			result += this.getInputString().charAt(i);
		}
		this.setOutput(result);
	}

	public void countVowelsAndConsonants() {
		int vowels = 0, consonants = 0;
		String vowelsList = "AEIOUaeiou";
		for (char c : this.inputString.toCharArray()) {
			if (Character.isLetter(c)) {
				if (vowelsList.indexOf(c) != -1) {
					vowels++;
				} else {
					consonants++;
				}
			}
		}
		this.setOutput("Vowels: " + vowels + ", Consonants: " + consonants);
	}

	public void displayCharactersAtOddPositions() {
		StringBuilder result = new StringBuilder();
		for (int i = 0; i < this.inputString.length(); i += 2) {
			result.append(this.inputString.charAt(i));
		}
		this.setOutput(result.toString());
	}

	public void displayCharactersAtEvenPositions() {
		StringBuilder result = new StringBuilder();
		for (int i = 1; i < this.inputString.length(); i += 2) {
			result.append(this.inputString.charAt(i));
		}
		this.setOutput(result.toString());
	}

	public void countUppercaseAndLowercaseLetters() {
		int uppercase = 0, lowercase = 0;
		for (char c : this.inputString.toCharArray()) {
			if (Character.isUpperCase(c)) {
				uppercase++;
			} else if (Character.isLowerCase(c)) {
				lowercase++;
			}
		}
		this.setOutput("Uppercase: " + uppercase + ", Lowercase: " + lowercase);
	}

	public void calculateOccurrenceOfEachCharacter() {
		HashMap<Character, Integer> occurrences = new HashMap<>();
		for (char c : this.inputString.toCharArray()) {
			occurrences.put(c, occurrences.getOrDefault(c, 0) + 1);
		}
		this.setOutput(occurrences.toString());
	}

	public void extractSubstring(int position, int length) throws InvalidInputException {
		if (position < 0 || position >= this.inputString.length() || length < 0
				|| position + length > this.inputString.length()) {
			throw new InvalidInputException("Invalid substring range!");
		}
		this.setOutput(this.inputString.substring(position, position + length));
	}

	public void findIndexOfFirstOccurrence(String substring) {
		this.setOutput("First occurrence at index: " + this.inputString.indexOf(substring));
	}

	public void findIndexOfLastOccurrence(String substring) {
		this.setOutput("Last occurrence at index: " + this.inputString.lastIndexOf(substring));
	}

	public void divideStringAtSeparator(String separator) {
		String[] parts = this.inputString.split(separator);
		this.setOutput(String.join(" | ", parts));
	}

}
