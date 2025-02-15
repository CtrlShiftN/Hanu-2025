package com.hanu.se.pr2.lect.week04.encapsulate.examples;

public class MyCircle {
	// Properties
	private double positionX;
	private double positionY;
	private double radius;
	private String color = "White"; // default value
	// Constructors

	public MyCircle() {
		this.positionX = 0.0; // default value
		this.positionY = 0.0; // default value
		this.radius = 1.0; // default value
	}

	public MyCircle(double x, double y) {
		this.positionX = x;
		this.positionY = y;
		this.radius = 1.0; // default value
	}

	public MyCircle(double x, double y, double radius) {
		this.positionX = x;
		this.positionY = y;
		this.radius = radius;
	}

	public MyCircle(double x, double y, double radius, String color) {
		this.positionX = x;
		this.positionY = y;
		this.radius = radius;
		this.color = color;
	}

	// other constructors here
	// Getters
	public double getPositionX() {
		return this.positionX;
	}

	public double getPositionY() {
		return this.positionY;
	}

	public double getRadius() {
		return this.radius;
	}

	public String getColor() {
		return this.color;
	}

	// Setters
	public void setPositionX(double x) {
		// validate
		this.positionX = x;
	}

	public void setPositionY(double y) {
		this.positionY = y;
	}

	public void setRadius(double radius) {
		if (isValidRadius(radius)) {
			this.radius = radius;
		} else {
			// Throw exceptions
			System.err.println("Radius is not valid!");
		}
	}

	public boolean setRadiuss(double radius) {
		if (isValidRadius(radius)) {
			this.radius = radius;
			return true;
		}
		return false;
	}

	public void setColor(String color) {
		this.color = color;
	}

	// Validators
	private boolean isValidRadius(double radius) {
		return radius > 0.0;
	}

	// other validators here
	// toString()
	public String toString() {
		return "MyCirCle[ positionX = " + this.getPositionX() + ", positionY = " + this.getPositionY() + ", radius = "
				+ this.getRadius() + ", color = \"" + this.getColor() + "\"]";
	}

}
