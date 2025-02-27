package com.hanu.se.pr2.lect.week06.polymorphism.lect.demo;

public class Rectangle extends Shape {
	private double width;
	private double height;

	public Rectangle() {
		super();
	}

	public Rectangle(double width, double height) {
		super();
		this.width = width;
		this.height = height;
	}

	public Rectangle(double width, double height, String color) {
		super(color);
		this.width = width;
		this.height = height;
	}

	public double getWidth() {
		return width;
	}

	public void setWidth(double width) {
		this.width = width;
	}

	public double getHeight() {
		return height;
	}

	public void setHeight(double height) {
		this.height = height;
	}

	@Override
	public double getArea() {
		return this.getWidth() * this.getHeight();
	}

	@Override
	public double getPerimeter() {
		return (this.getWidth() + this.getHeight()) * 2;
	}
	
	@Override
	public String toString() {
		return "Rectangle[" + super.toString() + ",width=" + this.getWidth() + ",height=" + this.getHeight() + "]";
	}

}
