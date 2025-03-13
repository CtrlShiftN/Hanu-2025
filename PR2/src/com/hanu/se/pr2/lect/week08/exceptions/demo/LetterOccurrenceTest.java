package com.hanu.se.pr2.lect.week08.exceptions.demo;

import com.hanu.se.pr2.lect.week08.exceptions.demo.utils.TextIO;
import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class LetterOccurrenceTest {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		try {
			System.out.println("Enter a word: ");
			String word = sc.nextLine();
			LetterOccurrence lo = new LetterOccurrence(word);
			HashMap<String, Integer> occurence = lo.getLetterOccurrence();
			System.out.println(lo.toString());
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
	}

}
