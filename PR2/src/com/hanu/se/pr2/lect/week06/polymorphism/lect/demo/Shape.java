package com.hanu.se.pr2.lect.week06.polymorphism.lect.demo;

public abstract class Shape {
	private String color = "white";

	public Shape() {
	}

	public Shape(String color) {
		this.color = color;
	}

	public String getColor() {
		return color;
	}

	public void setColor(String color) {
		this.color = color;
	}

	public abstract double getArea();

	public abstract double getPerimeter();

	public String toString() {
		return "Shape[color=" + this.getColor() + "]";
	}
}
