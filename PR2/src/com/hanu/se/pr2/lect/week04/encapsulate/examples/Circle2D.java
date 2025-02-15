package com.hanu.se.pr2.lect.week04.encapsulate.examples;

public class Circle2D {
	private double radius = 1.0;
	private Point2D position = new Point2D(0, 0);

	public Circle2D() {

	}

	public Circle2D(Point2D position, double radius) {
		this.position = position;
		this.radius = radius;
	}

	public double getRadius() {
		return this.radius;
	}

	public void setRadius(double radius) {
		this.radius = radius;
	}

	public Point2D getPosition() {
		return this.position;
	}

	public void setPosition(Point2D position) {
		this.position = position;
	}

	public double getPerimeter() {
		return this.radius * Math.PI * 2;
	}

	public double getArea() {
		return this.radius * this.radius * Math.PI;
	}
	
	public boolean contains(Point2D point) {
		double distance = this.getPosition().distance(point);
		return distance <= this.getRadius();
	}
	
	public boolean contains(Circle2D circle) {
		double distance = this.getPosition().distance(circle.getPosition());
		return distance <= Math.abs(this.getRadius() - circle.getRadius());
	}
	
	public boolean overlap(Circle2D circle) {
		double distance = this.getPosition().distance(circle.getPosition());
		return distance <= this.getRadius() + circle.getRadius();
	}

	public String toString() {
		return "Circle2D[x = " + this.getPosition().getX() + ", y = " + this.getPosition().getY() + ", radius = "
				+ this.getRadius() + "]";
	}

}
