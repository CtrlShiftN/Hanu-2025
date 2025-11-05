package week09.collections.dictionary;

import java.util.*;

public class EngVieDictionary {
	public static void main(String[] args) {
		// Declaration
		TreeMap<String, String> dictionary = new TreeMap<>();
		Scanner sc = new Scanner(System.in);
		String keyword, targetMeaning = "", userInput;
		boolean isStopped = false, isContinue = true;
		// Init
		dictionary.put("bear", "to accept, tolerate, or endure something, especially something unpleasant");
		dictionary.put("arm",
				"either of the two long parts of the upper body that are attached to the shoulders and have the hands at the end");
		dictionary.put("bubble",
				"a ball of gas that appears in a liquid, or a ball formed of air surrounded by liquid that floats in the air");
		// Prompt user to input keyword
		do {
			System.out.println("Enter an English word: ");
			keyword = sc.next();
			for (Map.Entry<String, String> word : dictionary.entrySet()) {
				String key = word.getKey();
//				String val = word.getValue();
				if (key.equalsIgnoreCase(keyword)) {
					targetMeaning = word.getValue();
					isStopped = true;
					break;
				}
			}
			if (isStopped) {
				System.out.println(keyword + " has meaning: " + targetMeaning);
			} else {
				System.out.println("404! Meaning not found");
			}
			System.out.println("Do you want to look up another word (yes/no)?");
			userInput = sc.next();
			if (userInput.equalsIgnoreCase("yes")) {
				isContinue = true;
			} else if (userInput.equalsIgnoreCase("no")) {
				System.out.println("You do not want to find another word! The program has stopped!");
				isContinue = false;
			} else {
				System.out.println("Invalid answer! The program has stopped!");
				isContinue = false;
			}
		} while (isContinue);
	}
}
