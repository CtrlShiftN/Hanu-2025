package com.hanu.se.pr2.lect.week05.inheritance.demo;

public class MovablePoint extends Point {
	private float xSpeed = 0.0f;
	private float ySpeed = 0.0f;

	public MovablePoint() {
		super();
	}

	public MovablePoint(float xSpeed, float ySpeed) {
		super();
		this.xSpeed = xSpeed;
		this.ySpeed = ySpeed;
	}

	public MovablePoint(float x, float y, float xSpeed, float ySpeed) {
		super(x, y);
		this.xSpeed = xSpeed;
		this.ySpeed = ySpeed;
	}

	public float getXSpeed() {
		return this.xSpeed;
	}

	public void setXSpeed(float xSpeed) {
		this.xSpeed = xSpeed;
	}

	public float getYSpeed() {
		return this.ySpeed;
	}

	public void setYSpeed(float ySpeed) {
		this.ySpeed = ySpeed;
	}

	public float[] getSpeed() {
		return new float[] { this.xSpeed, this.ySpeed };
	}

	public void setSpeed(float xSpeed, float ySpeed) {
		this.xSpeed = xSpeed;
		this.ySpeed = ySpeed;
	}

	@Override
	public String toString() {
		return "(" + this.getX() + "," + this.getY() + "), speed=(" + this.getXSpeed() + "," + this.getYSpeed() + ")";
	}

	public MovablePoint move() {
		float x = this.getX();
		float y = this.getY();
		x += this.getXSpeed();
		y += this.getYSpeed();
		this.setXY(x, y);
		return this;
	}

}
