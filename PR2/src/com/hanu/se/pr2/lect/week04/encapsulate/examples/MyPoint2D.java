package com.hanu.se.pr2.lect.week04.encapsulate.examples;

public class MyPoint2D {
	// Properties
	private double x;
	private double y;

	// Constructors
	public MyPoint2D(double x, double y) {
		this.x = x;
		this.y = y;
	}

	// Getters & Setters
	public double getX() {
		return this.x;
	}

	public void setX(double x) {
		this.x = x;
	}

	public double getY() {
		return this.y;
	}

	public void setY(double y) {
		this.y = y;
	}

	// Other methods
	public double distance(double x, double y) {
		// d = V[(x2 - x1)^2 + (y2 - y1)^2]
		return Math.sqrt(Math.pow(x - this.getX(), 2) + Math.pow(y - this.getY(), 2));
	}

	public double distance(MyPoint2D p) {
		return Math.sqrt(Math.pow(p.getX() - this.getX(), 2) + Math.pow(p.getY() - this.getY(), 2));
	}

	// toString
	public String toString() {
		return "Point2D[x = " + this.getX() + ",y = " + this.getY() + "]";
	}
}
