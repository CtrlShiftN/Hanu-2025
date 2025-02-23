package com.hanu.se.pr2.lect.week05.inheritance.demo;

public class Circle extends Shape {
	private double radius = 1.0;

	public Circle() {
		super();
	}

	public Circle(double radius) {
		super();
		this.radius = radius;
	}

	public Circle(double radius, String color, boolean filled) {
		super(color, filled);
		this.radius = radius;
	}

	public double getRadius() {
		return this.radius;
	}

	public void setRadius(double radius) {
		this.radius = radius;
	}

	public double getArea() {
		return this.getRadius() * this.getRadius() * Math.PI;
	}

	public double getPerimeter() {
		return this.getRadius() * 2 * Math.PI;
	}

	@Override
	public String toString() {
		return "Cirlce[" + super.toString() + ",radius=" + this.getRadius() + "]";
	}
}
