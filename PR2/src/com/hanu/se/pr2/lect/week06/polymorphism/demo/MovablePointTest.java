package com.hanu.se.pr2.lect.week06.polymorphism.demo;

public class MovablePointTest {

	public static void main(String[] args) {
		// Create a MovablePoint object
		MovablePoint point = new MovablePoint(2.0f, 3.0f, 1.0f, 1.5f);

		// Print initial position
		System.out.println("Initial Position: " + point);

		// Move the point in different directions and print each step
		point.moveUp();
		System.out.println("After moveUp(): " + point);

		point.moveDown();
		System.out.println("After moveDown(): " + point);

		point.moveLeft();
		System.out.println("After moveLeft(): " + point);

		point.moveRight();
		System.out.println("After moveRight(): " + point);

		// Move using move() method
		point.move();
		System.out.println("After move(): " + point);

	}

}
