package com.hanu.se.pr2.lect.week10.singleton.demo;

import java.lang.reflect.Constructor;
import java.util.Scanner;

public class IntegerSequenceRecursiveTest {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		System.out.println("Enter the length of sequence: ");
		int count = sc.nextInt();
		try {
			IntegerRecursiveSequence isr = IntegerRecursiveSequence.getInstance();
			IntegerRecursiveSequence isr2 = IntegerRecursiveSequence.getInstance();
			System.out.println("Instances are the same? " + (isr == isr2));
			isr.setCount(count);
			System.out.println("Even sequence: ");
			isr.printEvenSequence();
			System.out.println("\nTriangular sequence: ");
			isr2.printTriangularSequence();
			System.out.println("\nFibonacci sequence: ");
			isr.printFibonacciSequence();
			System.out.println();
			
			// Check if developers left any public constructors
			Constructor<?>[] constructors = IntegerRecursiveSequence.class.getDeclaredConstructors();
			boolean hasPublicConstructor = false;

			for (Constructor<?> constructor : constructors) {
				if (constructor.canAccess(null)) {
					hasPublicConstructor = true;
					break;
				}
			}

			if (hasPublicConstructor) {
				System.out.println("WARNING: Public constructor found! Singleton pattern is violated.");
			} else {
				System.out.println("Singleton pattern is correctly implemented.");
			}
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
	}

}
