package com.hanu.se.pr2.lect.week05.lect.demo;

public class Point2D {
	private double x = 0.0;
	private double y = 0.0;

	public Point2D() {

	}

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

	public double getDistanceTo(double x, double y) {
		return Math.sqrt(Math.pow(x - this.x, 2) + Math.pow(y - this.y, 2));
	}

	public double getDistanceTo(Point2D point) {
		return getDistanceTo(point.x, point.y);
	}

	@Override
	public String toString() {
		return "Point2D[x=" + this.getX() + ",y=" + this.getY() + "]";
	}
}
