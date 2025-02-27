package com.hanu.se.pr2.lect.week06.polymorphism.demo;

public class MonsterTest {
	public static void main(String[] args) {
		// Goblin
		Monster m1 = new Goblin("Grog", 80, 15, new Point2D(0, 0));
		System.out.println(m1); // name = Grog, health = 80, attackPw = 15, position = (0, 0)
		m1.attack(); // Grog (Goblin) attacks with a club
		System.out.println(m1.getName() + " at " + m1.getPosition()); // Grog at (0, 0)
		m1.moveUp(); // Grog at (0, 1)
		m1.moveLeft(); // Grog at (-1, 1)
		System.out.println(m1.getName() + " new position: " + m1.getPosition()); // Grog at (-1, 1)
		m1.transform();  // Grog transforms into Hulk!
		m1.teleport(new Point2D(10, 10));  // Grog at (10, 10)
		System.out.println(m1.getName() + " new position after teleporting: " + m1.getPosition()); // Grog new position after teleporting: (10, 10)
		// Vampire
		Monster m2 = new Vampire("Dracula", 90, 20, new Point2D(2, 3));
		System.out.println(m2); // name = Dracula, health = 90, attackPw = 20, position = (2, 3)
		m2.attack(); // Dracula (vampire) attacks by sucking blood!
		System.out.println(m2.getName() + " at " + m2.getPosition()); // Dracula at (2, 3)
		m2.setXSpeed(3);
		m2.setYSpeed(5);
		m2.moveUp(); // Dracula at (2, 8)
		m2.moveLeft(); // Dracula at (-1, 8)
		System.out.println(m2.getName() + " new position: " + m2.getPosition()); // Dracula at (-1, 8)
		m2.transform();  // Dracula transforms into a bat!
		m2.teleport(new Point2D(10, 10));  // Dracula at (10, 10)
		System.out.println(m2.getName() + " new position after teleporting: " + m2.getPosition()); // Dracula new position after teleporting: (10, 10)
	}
}
