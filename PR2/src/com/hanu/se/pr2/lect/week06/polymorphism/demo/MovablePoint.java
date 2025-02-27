package com.hanu.se.pr2.lect.week06.polymorphism.demo;

public class MovablePoint extends Point implements Movable {
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

	@Override
	public String toString() {
		return super.toString() + ",speed=(" + this.getXSpeed() + "," + this.getYSpeed() + ")";
	}
	public MovablePoint move() {
		float x = this.getX();
		float y = this.getY();
		this.setX(x + this.getXSpeed());
		this.setY(y + this.getYSpeed());
		return this;
	}

	@Override
	public void moveUp() {
		this.setY(this.getY() + this.getYSpeed());
	}

	@Override
	public void moveDown() {
		this.setY(this.getY() - this.getYSpeed());
	}

	@Override
	public void moveLeft() {
		this.setX(this.getX() - this.getXSpeed());
	}

	@Override
	public void moveRight() {
		this.setX(this.getX() + this.getXSpeed());
	}
}
