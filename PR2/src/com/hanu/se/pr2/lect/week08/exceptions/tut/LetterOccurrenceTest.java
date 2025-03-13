package com.hanu.se.pr2.lect.week08.exceptions.tut;

import java.util.HashMap;
import java.util.Scanner;

public class LetterOccurrenceTest {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		try {
			System.out.println("Enter a word: ");
			String word = sc.nextLine();
			LetterOccurrence lo = new LetterOccurrence(word);
			HashMap<String, Integer> occurence = lo.getLetterOccurrence();
			System.out.println(lo);
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}

	}

}
