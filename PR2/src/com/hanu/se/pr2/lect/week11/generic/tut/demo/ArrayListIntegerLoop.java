package com.hanu.se.pr2.lect.week11.generic.tut.demo;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class ArrayListIntegerLoop {
	private int amountOfNumber;
	private List<Integer> numberList = new ArrayList<Integer>();

	public ArrayListIntegerLoop(int amountOfNumber) throws NotPossibleException {
		if (!isValidAmountOfNumber(amountOfNumber)) {
			throw new NotPossibleException("ArrayListIntegerLoop.init - Invalid amount of number" + amountOfNumber);
		}
		this.amountOfNumber = amountOfNumber;
	}

	private boolean isValidAmountOfNumber(int num) {
		return num > 0;
	}

	public void getInteger() {
		Scanner sc = new Scanner(System.in);
		int amount = this.amountOfNumber;
		for (int i = 0; i < amount; i++) {
			try {
				System.out.println("Enter number at " + i + ": ");
				int num = sc.nextInt();
				this.numberList.add(num);
			} catch (Exception e) {
				System.out.println("Error: " + e.getMessage());
				break;
			}
		}
		sc.close();
	}

	public void printAllElement() {
		System.out.println(this.numberList.toString());
	}
}
