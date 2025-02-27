package com.hanu.se.pr2.lect.week05.lect.demo;

interface SpecialAbility {
	void transform();

	void teleport(Point2D position);
}

interface Moveable {
	void moveUp();

	void moveDown();

	void moveLeft();

	void moveRight();
}

abstract class Monster2D implements SpecialAbility, Movable {
	private String name;
	private int health = 100;
	private int attackPower;
	private Point2D position;
	private double xSpeed = 1.0;
	private double ySpeed = 1.0;

	public Monster2D() {
		this("Unknown", 100, 10, new Point2D());
	}

	public Monster2D(String name) {
		this(name, 100, 10, new Point2D());
	}

	public Monster2D(String name, int health) {
		this(name, health, 10, new Point2D());
	}

	public Monster2D(String name, int health, int attackPower) {
		this(name, health, attackPower, new Point2D());
	}

	public Monster2D(String name, int health, int attackPower, Point2D position) {
		this.name = name;
		this.health = health;
		this.attackPower = attackPower;
		this.position = position;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getHealth() {
		return health;
	}

	public void decreaseHealth() {
		this.health -= 10;
	}

	public int getAttackPower() {
		return attackPower;
	}

	public void raiseAttackPower(int amount) {
		this.attackPower += amount;
	}

	public abstract void attack();

	@Override
	public String toString() {
		return name + " [Health: " + health + ", AttackPower: " + attackPower + ", Position: " + position + "]";
	}

	public Point2D getPosition() {
		return position;
	}

	public void setPosition(Point2D position) {
		this.position = position;
	}

	public void setHealth(int health) {
		this.health = health;
	}

	public void setAttackPower(int attackPower) {
		this.attackPower = attackPower;
	}

	public double getxSpeed() {
		return xSpeed;
	}

	public void setxSpeed(double xSpeed) {
		this.xSpeed = xSpeed;
	}

	public double getySpeed() {
		return ySpeed;
	}

	public void setySpeed(double ySpeed) {
		this.ySpeed = ySpeed;
	}

}

class Goblin extends Monster2D {
	public Goblin(String name) {
		super(name);
	}

	public Goblin(String name, int health) {
		super(name, health);
	}

	public Goblin(String name, int health, int attackPower) {
		super(name, health, attackPower);
	}

	public Goblin(String name, int health, int attackPower, Point2D position) {
		super(name, health, attackPower, position);
	}

	@Override
	public void attack() {
		System.out.println(getName() + " (Goblin) attacks with a club!");
	}

	@Override
	public void transform() {
		System.out.println(getName() + " transforms into Hulk!");
	}

	@Override
	public void teleport(Point2D position) {
		System.out.println(getName() + " teleports to " + position + ".");
	}

	@Override
	public void moveUp() {
		double newX = this.getPosition().getX() + this.getxSpeed();
		this.getPosition().setX(newX);
	}

	@Override
	public void moveDown() {
		double newX = this.getPosition().getX() - this.getxSpeed();
		this.getPosition().setX(newX);
	}

	@Override
	public void moveLeft() {
		double newY = this.getPosition().getY() - this.getySpeed();
		this.getPosition().setY(newY);
	}

	@Override
	public void moveRight() {
		double newY = this.getPosition().getY() - this.getySpeed();
		this.getPosition().setY(newY);
	}
}

class Zombie extends Monster2D {
	public Zombie(String name) {
		super(name);
	}

	public Zombie(String name, int health) {
		super(name, health);
	}

	public Zombie(String name, int health, int attackPower) {
		super(name, health, attackPower);
	}

	public Zombie(String name, int health, int attackPower, Point2D position) {
		super(name, health, attackPower, position);
	}

	@Override
	public void attack() {
		System.out.println(getName() + " (Zombie) attacks by biting!");
	}

	@Override
	public void transform() {
		System.out.println(getName() + " transforms into Terminal!");
	}

	@Override
	public void teleport(Point2D position) {
		System.out.println(getName() + " teleports to " + position + ".");
	}

	@Override
	public void moveUp() {
		double newX = this.getPosition().getX() + this.getxSpeed();
		this.getPosition().setX(newX);
	}

	@Override
	public void moveDown() {
		double newX = this.getPosition().getX() - this.getxSpeed();
		this.getPosition().setX(newX);
	}

	@Override
	public void moveLeft() {
		double newY = this.getPosition().getY() - this.getySpeed();
		this.getPosition().setY(newY);
	}

	@Override
	public void moveRight() {
		double newY = this.getPosition().getY() - this.getySpeed();
		this.getPosition().setY(newY);
	}
}

class Vampire extends Monster2D {
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
	public void attack() {
		System.out.println(getName() + " (Vampire) attacks by sucking blood!");
	}

	@Override
	public void transform() {
		System.out.println(getName() + " transforms into a bat!");
	}

	@Override
	public void teleport(Point2D position) {
		System.out.println(getName() + " teleports to " + position + ".");
	}

	@Override
	public void moveUp() {
		double newX = this.getPosition().getX() + this.getxSpeed();
		this.getPosition().setX(newX);
	}

	@Override
	public void moveDown() {
		double newX = this.getPosition().getX() - this.getxSpeed();
		this.getPosition().setX(newX);
	}

	@Override
	public void moveLeft() {
		double newY = this.getPosition().getY() - this.getySpeed();
		this.getPosition().setY(newY);
	}

	@Override
	public void moveRight() {
		double newY = this.getPosition().getY() - this.getySpeed();
		this.getPosition().setY(newY);
	}
}
