package com.hanu.se.pr2.lect.week05.inheritance.demo;

import java.util.Arrays;

public class TestMain {

	public static void main(String[] args) {
//		Student student = new Student("Alice", "123 Main St", "Computer Science", 2, 15000);
//		Staff staff = new Staff("Bob", "456 Elm St", "XYZ High School", 50000);
//
//		System.out.println(student);
//		System.out.println(staff);

//		Point p = new Point(1.2f, 3.4f);
//		float[] xy = p.getXY();
//		System.out.println(xy[0]);
//		System.out.println(xy[1]);
//		System.out.println(xy.length);
//		System.out.println(p.toString());

//		Point p1 = new Point();
//		Point p2 = new Point(2.5f, 3.5f);
//
//		System.out.println("Point 1: " + p1);
//		System.out.println("Point 2: " + p2);
//
//		p1.setXY(1.0f, 1.5f);
//		System.out.println("Updated Point 1: " + p1);
//
//		// Testing MovablePoint class
//		MovablePoint mp1 = new MovablePoint();
//		MovablePoint mp2 = new MovablePoint(0.5f, 1.0f);
//		MovablePoint mp3 = new MovablePoint(3.0f, 4.0f, 1.5f, 2.5f);
//
//		System.out.println("MovablePoint 1: " + mp1);
//		System.out.println("MovablePoint 2: " + mp2);
//		System.out.println("MovablePoint 3: " + mp3);
//
//		// Moving MovablePoint
//		mp3.move();
//		System.out.println("Moved MovablePoint 3: " + mp3);
//
//		// Updating speed and moving again
//		mp3.setSpeed(2.0f, 3.0f);
//		mp3.move();
//		System.out.println("Moved MovablePoint 3 again: " + mp3);

//		Circle c = new Circle(2.0, "red", false);
//		System.out.println(c.toString());
//		
//		Rectangle r = new Rectangle(2.3, 3.4, "blue", false);
//		System.out.println(r);

//		Shape shape1 = new Shape();
//		Shape shape2 = new Shape("blue", false);
//
//		System.out.println(shape1);
//		System.out.println(shape2);
//
//		// Testing Circle class
//		Circle circle1 = new Circle();
//		Circle circle2 = new Circle(2.5);
//		Circle circle3 = new Circle(3.0, "green", true);
//
//		System.out.println(circle1);
//		System.out.println(circle2);
//		System.out.println(circle3);
//		System.out.println("Circle 3 Area: " + circle3.getArea());
//		System.out.println("Circle 3 Perimeter: " + circle3.getPerimeter());
//
//		// Testing Rectangle class
//		Rectangle rect1 = new Rectangle();
//		Rectangle rect2 = new Rectangle(4.0, 5.0);
//		Rectangle rect3 = new Rectangle(2.5, 3.5, "yellow", false);
//
//		System.out.println(rect1);
//		System.out.println(rect2);
//		System.out.println(rect3);
//		System.out.println("Rectangle 3 Area: " + rect3.getArea());
//		System.out.println("Rectangle 3 Perimeter: " + rect3.getPerimeter());
//
//		// Testing Square class
//		Square square1 = new Square();
//		Square square2 = new Square(4.0);
//		Square square3 = new Square(5.5, "purple", true);
//
//		System.out.println(square1);
//		System.out.println(square2);
//		System.out.println(square3);
//		square3.setSide(6.0);
//		System.out.println("Updated Square 3: " + square3);

		BubbleSort bs = new BubbleSort(new int[] { 5, 2, 9, 1, 5, 6 });
		bs.sort();
		System.out.println(Arrays.toString(bs.getArray()));
		System.out.println(bs);
	}

}
