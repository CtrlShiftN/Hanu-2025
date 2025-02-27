package com.hanu.se.pr2.lect.week06.polymorphism.demo;

public class Vampire extends Monster {
	public Vampire(String name) {
		super(name);
	}

	public Vampire(String name, int health) {
		super(name, health);
	}

	public Vampire(String name, int health, int attackPower) {
		super(name, health, attackPower);
	}

	public Vampire(String name, int health, int attackPower, Point2D position) {
		super(name, health, attackPower, position);
	}

	@Override
	public String toString() {
		return "Vampire[" + super.toString() + "]";
	}

	@Override
	public void transform() {
		System.out.println(this.getName() + " transforms into a bat!");
	}

	@Override
	public void teleport(Point2D point) {
		this.setPosition(point);
	}

	@Override
	public void moveUp() {
		Point2D currentPosition = this.getPosition();
		double currentY = currentPosition.getY();
		this.getPosition().setY(currentY + this.getYSpeed());
	}

	@Override
	public void moveDown() {
		Point2D currentPosition = this.getPosition();
		double currentY = currentPosition.getY();
		this.getPosition().setY(currentY - this.getYSpeed());
	}

	@Override
	public void moveLeft() {
		Point2D currentPosition = this.getPosition();
		double currentX = currentPosition.getX();
		this.getPosition().setX(currentX - this.getXSpeed());
	}

	@Override
	public void moveRight() {
		Point2D currentPosition = this.getPosition();
		double currentX = currentPosition.getX();
		this.getPosition().setX(currentX + this.getXSpeed());
	}

	@Override
	public void attack() {
		System.out.println(this.getName() + " (Vampire) attacks by sucking blood!");
	}
}
