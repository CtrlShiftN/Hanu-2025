package com.hanu.se.pr2.lect.week04.encapsulate.examples;

public class Test {

	public static void main(String[] args) {
//		Circle c1 = new Circle(2.0, "blue");
//		System.out.println(c1.toString());
//		Circle c2 = new Circle(2.0);
//		System.out.println(c2.toString());
//		Circle c3 = new Circle();
//		System.out.println(c3.toString());

//		MyPoint2D p1 = new MyPoint2D(1.5, 5.5);
//		MyPoint2D p2 = new MyPoint2D(-5.3, -4.4);
//		System.out.println(p1.distance(-5.3, -4.4));
//		System.out.println(p1.distance(p2));

		Circle2D c1 = new Circle2D(new Point2D(2, 2), 5.5);
		System.out.println(c1.contains(new Point2D(3, 3)));
		System.out.println(c1.contains(new Circle2D(new Point2D(4, 5), 10.5)));
		System.out.println(c1.overlap(new Circle2D(new Point2D(3, 5), 2.3)));
	}

}
