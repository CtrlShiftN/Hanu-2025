package com.hanu.se.pr2.lect.week06.polymorphism.demo;

public class Point {
	public float x = 0.0f;
	public float y = 0.0f;

	public Point() {
	}

	public Point(float x, float y) {
		this.x = x;
		this.y = y;
	}

	public float getX() {
		return this.x;
	}

	public void setX(float x) {
		this.x = x;
	}

	public float getY() {
		return this.y;
	}

	public void setY(float y) {
		this.y = y;
	}

//	public float[] getXY() {
//		float[] result = new float[2];
//		result[0] = this.getX();
//		result[1] = this.getY();
//		return result;
//	}

	public float[] getXY() {
		float[] position = { this.getX(), this.getY() };
		return position;
	}

	public void setXY(float x, float y) {
		this.setX(x);
		this.setY(y);
	}

	public String toString() {
		return "(" + this.getX() + "," + this.getY() + ")";
	}
}
