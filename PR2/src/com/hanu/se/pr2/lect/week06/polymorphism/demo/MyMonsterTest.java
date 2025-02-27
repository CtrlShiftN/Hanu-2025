package com.hanu.se.pr2.lect.week06.polymorphism.demo;

public class MyMonsterTest {

	public static void main(String[] args) {
		// Polymorphism: Substituting superclass reference with subclass instances
		MyMonster m1 = new FireMonster("Inferno");
		MyMonster m2 = new WaterMonster("Aqua");
		MyMonster m3 = new StoneMonster("Rocky");

		// Invoking attack() on each monster
		System.out.println(m1.attack()); // Calls FireMonster's attack
		System.out.println(m2.attack()); // Calls WaterMonster's attack
		System.out.println(m3.attack()); // Calls StoneMonster's attack

		// Reassigning superclass reference to another subclass instance
		m1 = new StoneMonster("Golem");
		System.out.println(m1.attack()); // Now calls StoneMonster's attack

		// We have a problem here!!!
		// Monster m4 = new Monster("u2u2");
		// System.out.println(m4.attack()); // garbage!!!
		// !^_&^$@+%$* I don't know how to attack!

		// Handling scenario where an instance of the superclass is directly created
		MyMonster m5 = new MyMonster("Unknown") {
			@Override
			public String attack() {
				return "I am a generic monster and have no specific attack!";
			}
		};
		System.out.println(m5.attack()); // Generic attack message
	}

}
