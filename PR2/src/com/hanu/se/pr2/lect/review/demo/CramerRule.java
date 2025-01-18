package com.hanu.se.pr2.lect.review.demo;

public class CramerRule {

	public static void main(String[] args) {
		System.out.println("3.4x + 50.2y = 44.5");
		System.out.println("2.1x + 0.55y = 5.9");
		System.out.println("The result is: ");
		double x = (44.5 * 0.55 - 50.2 * 5.9) / (3.4 * 0.55 - 50.2 * 2.1);
		double y = (3.4 * 5.9 - 44.5 * 2.1) / (3.4 * 0.55 - 50.2 * 2.1);
		System.out.println("x = " + x);
		System.out.println("y = " + y);
	}

}
