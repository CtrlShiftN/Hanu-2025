package com.hanu.se.pr2.lect.week05.inheritance.demo;

public class Point {
	private float x = 0.0f;
	private float y = 0.0f;

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

	public void setXY(float x, float y) {
		this.x = x;
		this.y = y;
	}

	public float[] getXY() {
		return new float[] { this.x, this.y };
	}

	public String toString() {
		return "(" + this.getX() + "," + this.getY() + ")";
	}

}
