package com.hanu.se.pr2.lect.week06.polymorphism.demo;

public class Square extends Rectangle {
	public Square() {
		super();
	}

	public Square(double side) {
		super(side, side);
	}

	public Square(double side, Colors color, boolean filled) {
		super(side, side, color, filled);
	}

	public Square(double side, Colors color, boolean filled, Point2D position) {
		super(side, side, color, filled, position);
	}

	public double getSide() {
		return this.getWidth();
	}

	public void setSide(double side) {
		this.setWidth(side);
		this.setLength(side);
	}

	@Override
	public void setWidth(double side) {
		this.setWidth(side);
	}

	@Override
	public void setLength(double side) {
		this.setLength(side);
	}

	@Override
	public double getArea() {
//		return Math.pow(this.getSide(), 2);
		return this.getSide() * this.getSide();
	}

	@Override
	public double getPerimeter() {
		return this.getSide() * 4;
	}

	@Override
	public String toString() {
		return "Square[side=" + this.getSide() + "," + super.toString() + "]";
	}
}
