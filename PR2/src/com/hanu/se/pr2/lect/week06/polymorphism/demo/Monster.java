package com.hanu.se.pr2.lect.week06.polymorphism.demo;

public abstract class Monster implements SpecialAbility, Movable {
	private String name;
	private int health = 100;
	private int attackPower = 1;
	private Point2D position = new Point2D();
	private double xSpeed = 1.0;
	private double ySpeed = 1.0;

	public Monster() {

	}

	public Monster(String name) {
		this.name = name;
	}

	public Monster(String name, int health) {
		this.name = name;
		this.health = health;
	}

	public Monster(String name, int health, int attackPower) {
		this.name = name;
		this.health = health;
		this.attackPower = attackPower;
	}

	public Monster(String name, int health, int attackPower, Point2D position) {
		this.name = name;
		this.health = health;
		this.attackPower = attackPower;
		this.position = position;
	}

	public String getName() {
		return this.name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getHealth() {
		return health;
	}

	public void decreaseHealth(int amount) {
		this.health -= amount;
	}

	public int getAttackPower() {
		return attackPower;
	}

	public void raiseAttackPower(int amount) {
		this.attackPower += amount;
	}

	public Point2D getPosition() {
		return position;
	}
	
	public void setPosition(Point2D position) {
		this.position = position;
	}

	public double getXSpeed() {
		return xSpeed;
	}

	public void setXSpeed(double xSpeed) {
		this.xSpeed = xSpeed;
	}

	public double getYSpeed() {
		return ySpeed;
	}

	public void setYSpeed(double ySpeed) {
		this.ySpeed = ySpeed;
	}

	public abstract void attack();

	public String toString() {
		return "Monster[name=" + this.getName() + ",health=" + this.getHealth() + ",attackPower="
				+ this.getAttackPower() + ",position=" + this.getPosition().toString() + ",speed=(xSpd="
				+ this.getXSpeed() + ",ySpd=" + this.getYSpeed() + ")]";
	}

}
