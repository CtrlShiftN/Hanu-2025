package com.hanu.se.pr2.lect.week04.encapsulate.examples;

public class Circle {
	// Properties
	private double radius = 1.0;
	private String color = "red";

	// Constructors
	public Circle() {
	}

	public Circle(double radius) {
		this.radius = radius;
	}

	public Circle(double radius, String color) {
		this.radius = radius;
		this.color = color;
	}

	// Getters
	public double getRadius() {
		return this.radius;
	}

	public String getColor() {
		return this.color;
	}

	// Setters
	public void setRadius(double radius) {
		this.radius = radius;
	}

	public void setColor(String color) {
		this.color = color;
	}

	// Other operations (Methods)
	public double getPerimeter() {
		return this.radius * Math.PI * 2;
	}

	public double getArea() {
		return this.radius * this.radius * Math.PI;
	}

	// toString()
	public String toString() {
		return "Circle[radius = " + this.getRadius() + ", color = \"" + this.getColor() + "\", area = " + this.getArea()
				+ "]";
	}

}
