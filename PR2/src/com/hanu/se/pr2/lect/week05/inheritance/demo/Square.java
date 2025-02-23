package com.hanu.se.pr2.lect.week05.inheritance.demo;

public class Square extends Rectangle {
	private double side;

	public Square() {
		super();
	}

	public Square(double side) {
		super(side, side);
	}

	public Square(double side, String color, boolean filled) {
		super(side, side, color, filled);
	}

	public double getSide() {
		return this.side;
	}

	public void setSide(double side) {
		this.setWidth(side);
		this.setHeight(side);
	}

	@Override
	public void setWidth(double side) {
		super.setWidth(side);
	}

	@Override
	public void setHeight(double side) {
		super.setHeight(side);
	}

	@Override
	public String toString() {
		return "Square[" + super.toString() + "]";
	}

}
