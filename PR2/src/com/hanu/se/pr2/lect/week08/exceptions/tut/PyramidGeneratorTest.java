package com.hanu.se.pr2.lect.week08.exceptions.tut;

import java.util.Scanner;

public class PyramidGeneratorTest {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		try {
			System.out.println("Enter number of row: ");
			int row = sc.nextInt();
			PyramidGenerator p = new PyramidGenerator(row);
			System.out.println("Half Right Pyramid");
			p.printHalfRightPyramid();
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
	}

}
