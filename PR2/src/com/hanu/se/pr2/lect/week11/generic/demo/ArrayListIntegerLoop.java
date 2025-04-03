package com.hanu.se.pr2.lect.week11.generic.demo;

import java.util.ArrayList;
import java.util.InputMismatchException;
import java.util.Scanner;

public class ArrayListIntegerLoop {
	public ArrayList<Integer> intArr;
	public int amountOfNumbers;

	public ArrayListIntegerLoop(int amountOfNumbers) {
		this.amountOfNumbers = amountOfNumbers;
		this.intArr = new ArrayList<Integer>();
	}

	public void getIntegers() {
		Scanner sc = new Scanner(System.in);
		for (int i = 1; i <= this.amountOfNumbers; i++) {
			try {
				System.out.println("Enter number at position " + i + ": ");
				int num = sc.nextInt();
				this.intArr.add(num);
			} catch (Exception e) {
				System.out.println("Error: " + e.getMessage());
				break;
			}

		}
		sc.close();
	}

	public void printAllElements() {
		int count = 1;
		for (Integer integer : intArr) {
			System.out.println("Number " + count + ": " + integer);
			count++;
		}
	}
}
