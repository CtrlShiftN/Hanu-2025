package com.hanu.se.pr2.lect.week05.lect.demo;

public class Monster2DTest {

	public static void main(String[] args) {
		// Creating instances of different monsters
		Goblin goblin = new Goblin("Grog", 80, 15, new Point2D(0, 0));
		Zombie zombie = new Zombie("Zed", 90, 20, new Point2D(2, 3));
		Vampire vampire = new Vampire("Dracula", 120, 25, new Point2D(5, 5));

		// Test Attack Methods
		System.out.println("=== Attack Tests ===");
		goblin.attack();
		zombie.attack();
		vampire.attack();

		// Test Moveable Actions
		System.out.println("\n=== Movement Tests ===");
		System.out.println("Initial Positions:");
		System.out.println(goblin.getName() + " at " + goblin.getPosition());
		System.out.println(zombie.getName() + " at " + zombie.getPosition());
		System.out.println(vampire.getName() + " at " + vampire.getPosition());

		System.out.println("\nMoving Goblin:");
		goblin.moveUp();
		goblin.moveLeft();
		System.out.println(goblin.getName() + " new position: " + goblin.getPosition());

		System.out.println("\nMoving Zombie:");
		zombie.moveDown();
		zombie.moveRight();
		System.out.println(zombie.getName() + " new position: " + zombie.getPosition());

		System.out.println("\nMoving Vampire:");
		vampire.moveLeft();
		vampire.moveRight();
		System.out.println(vampire.getName() + " new position: " + vampire.getPosition());

		// Test Special Abilities
		System.out.println("\n=== Special Ability Tests ===");
		goblin.transform();
		goblin.teleport(new Point2D(10, 10));
		System.out.println(goblin.getName() + " new position after teleporting: " + goblin.getPosition());

		zombie.transform();
		zombie.teleport(new Point2D(15, 15));
		System.out.println(zombie.getName() + " new position after teleporting: " + zombie.getPosition());

		vampire.transform();
		vampire.teleport(new Point2D(20, 20));
		System.out.println(vampire.getName() + " new position after teleporting: " + vampire.getPosition());

		// Polymorphic Behavior
		System.out.println("\n=== Polymorphic Behavior Test ===");
		Monster2D monster = new Goblin("Ragrok");
		monster.attack();

		monster = new Vampire("Nosferatu");
		monster.attack();

		// Checking Special Abilities via Interface
		System.out.println("\n=== Interface Casting Tests ===");
		if (vampire instanceof SpecialAbility) {
			((SpecialAbility) vampire).transform();
			((SpecialAbility) vampire).teleport(new Point2D(3, 7));
		}

		if (goblin instanceof Moveable) {
			((Moveable) goblin).moveUp();
		}
	}

}
