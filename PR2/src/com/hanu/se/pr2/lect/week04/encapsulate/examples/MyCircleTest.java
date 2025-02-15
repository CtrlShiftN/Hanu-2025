package com.hanu.se.pr2.lect.week04.encapsulate.examples;

public class MyCircleTest {

	public static void main(String[] args) {
		MyCircle c1 = new MyCircle();
		System.out.println(c1.toString());
		MyCircle c2 = new MyCircle(3.2, 2.3, 1.8, "Red");
		System.out.println(c2.toString());

	}

}
