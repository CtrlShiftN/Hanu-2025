package com.hanu.se.pr2.lect.week05.demo;

//Shape class
class Shape {
	private String color = "red";
	private boolean filled = true;

	// Constructors
	public Shape() {
	}

	public Shape(String color, boolean filled) {
		this.color = color;
		this.filled = filled;
	}

	// Getters and Setters
	public String getColor() {
		return color;
	}

	public void setColor(String color) {
		this.color = color;
	}

	public boolean isFilled() {
		return filled;
	}

	public void setFilled(boolean filled) {
		this.filled = filled;
	}

	// toString method
	@Override
	public String toString() {
		return "Shape[color=" + color + ", filled=" + filled + "]";
	}
}

//Circle class extending Shape
class Circle extends Shape {
	private double radius = 1.0;

	// Constructors
	public Circle() {
	}

	public Circle(double radius) {
		this.radius = radius;
	}

	public Circle(double radius, String color, boolean filled) {
		super(color, filled);
		this.radius = radius;
	}

	// Getters and Setters
	public double getRadius() {
		return radius;
	}

	public void setRadius(double radius) {
		this.radius = radius;
	}

	public double getArea() {
		return Math.PI * radius * radius;
	}

	public double getPerimeter() {
		return 2 * Math.PI * radius;
	}

	// toString method
	@Override
	public String toString() {
		return "Circle[" + super.toString() + ", radius=" + radius + "]";
	}
}

//Rectangle class extending Shape
class Rectangle extends Shape {
	private double width = 1.0;
	private double length = 1.0;

	// Constructors
	public Rectangle() {
	}

	public Rectangle(double width, double length) {
		this.width = width;
		this.length = length;
	}

	public Rectangle(double width, double length, String color, boolean filled) {
		super(color, filled);
		this.width = width;
		this.length = length;
	}

	// Getters and Setters
	public double getWidth() {
		return width;
	}

	public void setWidth(double width) {
		this.width = width;
	}

	public double getLength() {
		return length;
	}

	public void setLength(double length) {
		this.length = length;
	}

	public double getArea() {
		return width * length;
	}

	public double getPerimeter() {
		return 2 * (width + length);
	}

	// toString method
	@Override
	public String toString() {
		return "Rectangle[" + super.toString() + ", width=" + width + ", length=" + length + "]";
	}
}

//Square class extending Rectangle
class Square extends Rectangle {
	// Constructors
	public Square() {
	}

	public Square(double side) {
		super(side, side);
	}

	public Square(double side, String color, boolean filled) {
		super(side, side, color, filled);
	}

	// Getter and Setter
	public double getSide() {
		return getWidth();
	}

	public void setSide(double side) {
		setWidth(side);
		setLength(side);
	}

	@Override
	public void setWidth(double side) {
		super.setWidth(side);
		super.setLength(side);
	}

	@Override
	public void setLength(double side) {
		super.setLength(side);
		super.setWidth(side);
	}

	// toString method
	@Override
	public String toString() {
		return "Square[" + super.toString() + "]";
	}
}
