package com.hanu.se.pr2.lect.week10.singleton.demo;

public class FactorialRecursiveTest {

	public static void main(String[] args) {
		try {
			FactorialRecursive f1 = FactorialRecursive.get(5);
			System.out.println("Factorial of 5: " + f1.getValue());

			FactorialRecursive f2 = FactorialRecursive.get(3);
			System.out.println("Factorial of 3: " + f2.getValue());

			FactorialRecursive f3 = FactorialRecursive.get(6);
			System.out.println("Factorial of 6: " + f3.getValue());
			
			FactorialRecursive f4 = FactorialRecursive.get(-4);
			System.out.println("Factorial of -4: " + f4.getValue());

		} catch (NotPossibleException e) {
			System.out.println(e.getMessage());
		}
	}

}
