package com.hanu.se.pr2.lect.week05.inheritance.demo;

public class Rectangle extends Shape {
	private double width = 1.0;
	private double height = 1.0;

	public Rectangle() {
		super();
	}

	public Rectangle(double width, double height) {
		super();
		this.width = width;
		this.height = height;
	}

	public Rectangle(double width, double height, String color, boolean filled) {
		super(color, filled);
		this.width = width;
		this.height = height;
	}

	public double getWidth() {
		return this.width;
	}

	public void setWidth(double width) {
		this.width = width;
	}

	public double getHeight() {
		return this.height;
	}

	public void setHeight(double height) {
		this.height = height;
	}

	public double getArea() {
		return this.getWidth() * this.getHeight();
	}

	public double getPerimeter() {
		return (this.getWidth() + this.getHeight()) * 2.0;
	}

	@Override
	public String toString() {
		return "Rectangle[" + super.toString() + ",width=" + this.getWidth() + ",height=" + this.getHeight() + "]";
	}

}
