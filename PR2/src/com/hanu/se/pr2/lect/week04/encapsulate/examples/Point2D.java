package com.hanu.se.pr2.lect.week04.encapsulate.examples;

public class Point2D {
	private double x;
	private double y;

	public Point2D(double x, double y) {
		this.x = x;
		this.y = y;
	}

	public double getX() {
		return x;
	}

	public void setX(double x) {
		this.x = x;
	}

	public double getY() {
		return y;
	}

	public void setY(double y) {
		this.y = y;
	}
	
	public double distance(double a, double b) {
		return Math.sqrt(Math.pow(a - this.getX(), 2) + Math.pow(b - this.getY(), 2));
	}
	
	public double distance(Point2D p) {
		return Math.sqrt(Math.pow(p.getX() - this.getX(), 2) + Math.pow(p.getY() - this.getY(), 2));
	}

	@Override
	public String toString() {
		return "Point2D [getX()=" + this.getX() + ", getY()=" + this.getY() + "]";
	}
	public static void main(String[] args) {
		Point2D p1 = new Point2D(1.5, 5.5);
		System.out.println(p1.distance(-5.3, -4.4));
		Point2D p2 = new Point2D(-5.3, -4.4);
		System.out.println(p1.distance(p2));
	}

}
