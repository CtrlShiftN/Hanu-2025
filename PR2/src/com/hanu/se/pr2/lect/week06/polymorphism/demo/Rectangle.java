package com.hanu.se.pr2.lect.week06.polymorphism.demo;

public class Rectangle extends Shape2D {
	private double width = 1.0;
	private double length = 1.0;

	public Rectangle() {
		super();
	}

	public Rectangle(double length, double width) {
		super();
		this.length = length;
		this.width = width;
	}

	public Rectangle(double length, double width, Colors color, boolean filled) {
		super(color, filled);
		this.length = length;
		this.width = width;
	}

	public Rectangle(double length, double width, Colors color, boolean filled, Point2D position) {
		super(color, filled, position);
		this.length = length;
		this.width = width;
	}

	public double getWidth() {
		return this.width;
	}

	public void setWidth(double width) {
		this.width = width;
	}

	public double getLength() {
		return this.length;
	}

	public void setLength(double length) {
		this.length = length;
	}

	@Override
	public double getArea() {
		return this.length * this.width;
	}

	@Override
	public double getPerimeter() {
		return (this.length + this.width) * 2;
	}

	@Override
	public String toString() {
		return "Rectangle[" + super.toString() + ",length=" + this.getLength() + ",width=" + this.getWidth() + "]";
	}
}
