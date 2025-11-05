package week09.collections.dictionary;

import java.util.*;

public class UniqueVocabPrinter {

	public static void main(String[] args) {
		// Declaration
		String outputFromFile = "Create a text file which contains several English paragraph and fill it with some content that you"
				+ " can find. In the file, there should be words that a duplicated. Write a program to read the content"
				+ " of this text file and prints out a vocabulary of all the words in the text, without duplicates. Your"
				+ " program should be case-insensitive, which means the two strings \"Hello\" and \"hello\" should"
				+ " be considered the same word. Write a program called EngVieDictionary which can translate from English words to"
				+ " Vietnamese meanings. The program should store words and their meanings in a"
				+ " Map<String, String> object. It should ask the user to enter an English word, then shows the"
				+ " word’s meaning or the text “Meaning not found” if the word doesn’t exist in the data of the"
				+ " program (the Map object above). The program should also asks if the user wants to look up"
				+ " another word. The user should answer 1 (yes) or 2 (no).";
		TreeSet<String> vocab = new TreeSet<>();
		
		// Processing
		// remove all special characters
		outputFromFile = outputFromFile.replaceAll("[^a-zA-Z0-9 ]", "");
		String[] words = outputFromFile.split(" ");
//		System.out.println("Words length: " + words.length);
		// Add all elements to set
		for (int i = 0; i < words.length; i++) {
			vocab.add(words[i].toLowerCase());
		}
		
		// Display
		System.out.println(vocab);
	}

}
