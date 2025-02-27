package com.hanu.se.pr2.lect.week06.polymorphism.demo;

public class Shape2DTest {

	public static void main(String[] args) {
//		Rectangle s1 = new Rectangle(3.4, 2.6, Colors.Black, true, new Point2D(1.2, 3.4));
//		System.out.println(s1);
//		Square sq1 = new Square();
//		System.out.println(sq1);
		
		Shape2D c1 = new Circle();
		System.out.println(c1.toString());
		Shape2D r1 = new Rectangle();
		System.out.println(r1.toString());
		Shape2D s1 = new Square();
		System.out.println(s1.toString());
		Shape2D s2 = new Square(3);
		System.out.println(s2.toString());
	}

}
