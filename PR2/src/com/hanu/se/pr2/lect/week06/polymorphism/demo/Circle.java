package com.hanu.se.pr2.lect.week06.polymorphism.demo;

public class Circle extends Shape2D {
	private double radius = 1.0;

	public Circle() {
		super();
	}

	public Circle(double radius) {
		super();
		this.radius = radius;
	}

	public Circle(double radius, Colors color, boolean filled) {
		super(color, filled);
		this.radius = radius;
	}

	public Circle(double radius, Colors color, boolean filled, Point2D position) {
		super(color, filled, position);
		this.radius = radius;
	}

	public double getRadius() {
		return this.radius;
	}

	public void setRadius(double radius) {
		this.radius = radius;
	}

	@Override
	public double getArea() {
		return this.radius * this.radius * Math.PI;
	}

	@Override
	public double getPerimeter() {
		return this.radius * 2 * Math.PI;
	}

	@Override
	public String toString() {
		return "Circle[" + super.toString() + ",radius=" + this.getRadius() + "]";
	}

}
