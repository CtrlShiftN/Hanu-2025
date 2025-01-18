package com.hanu.se.pr2.lect.week02.demo;

import java.util.*;

public class StudentSorter {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		System.out.println("Number of students:");
		int noOfStudent = sc.nextInt();
		String[] studentName = new String[noOfStudent];
		int[] studentScore = new int[noOfStudent];
		for (int i = 0; i < noOfStudent; i++) {
			System.out.println("Student " + (i + 1) + ":");
			studentName[i] = sc.next();
			System.out.println("Student " + (i + 1) + "'score:");
			studentScore[i] = sc.nextInt();
			sc.nextLine();
		}
		bubbleSort(studentName, studentScore);
		for (int i = 0; i < noOfStudent; i++) {
			System.out.println(studentName[i] + ": " + studentScore[i]);
		}
	}

	public static void bubbleSort(String[] studentName, int[] studentScore) {
		int charLength = studentScore.length;
		boolean isSwapped;
		for (int i = 0; i < studentScore.length - 1; i++) {
			isSwapped = false;
			for (int j = 0; j < charLength - i - 1; j++) {
				if (studentScore[j] <= studentScore[j + 1]) {
					// Swap student score
					int temp = studentScore[j];
					studentScore[j] = studentScore[j + 1];
					studentScore[j + 1] = temp;
					// Swap student name
					String tempStr = studentName[j];
					studentName[j] = studentName[j+1];
					studentName[j+1] = tempStr;
					isSwapped = true;
				}
			}
			if (!isSwapped) {
				break;
			}
		}
	}
}
