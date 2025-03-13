package com.hanu.se.pr2.lect.week08.exceptions.demo;

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
			System.out.println("Half Left Pyramid");
			p.printHalfLeftPyramid();
			System.out.println("Full Pyramid");
			p.printFullPyramid();
			System.out.println("Inverted Half Right Pyramid");
			p.printInvertedHalfRightPyramid();
			System.out.println("Inverted Half Left Pyramid");
			p.printInvertedHalfLeftPyramid();
			System.out.println("Inverted Full Pyramid");
			p.printInvertedFullPyramid();
			System.out.println("Pascal Pyramid");
			p.printPascalsPyramid();
			System.out.println("Floyds Pyramid");
			p.printFloydsTriangle();
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}

	}

}
