package com.hanu.se.pr2.lect.review.demo;

import java.util.*;

public class EggCounter {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		System.out.println("Enter the total number of eggs: ");
		int noOfEggs = sc.nextInt();
		System.out.println("You have: ");
		int gross = noOfEggs / 144;
		System.out.println(gross + " gross ");
		int remainingEggs = noOfEggs % 144;
		int dozen = remainingEggs / 12;
		System.out.println(dozen + " dozen ");
		remainingEggs %= 12; // remainingEggs = remainingEggs % 12;
		System.out.println(remainingEggs + " leftover egg(s)");
	}

}
