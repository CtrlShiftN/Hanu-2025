package com.hanu.se.pr2.lect.week05.lect.demo;

abstract class Monster {
	protected String name;

	public Monster(String name) {
		this.name = name;
	}

	// Abstract method for attack
	public abstract String attack();
}

//FireMonster subclass
class FireMonster extends Monster {
	public FireMonster(String name) {
		super(name);
	}

	@Override
	public String attack() {
		return name + " attacks with fire!";
	}
}

//WaterMonster subclass
class WaterMonster extends Monster {
	public WaterMonster(String name) {
		super(name);
	}

	@Override
	public String attack() {
		return name + " attacks with water!";
	}
}

//StoneMonster subclass
class StoneMonster extends Monster {
	public StoneMonster(String name) {
		super(name);
	}

	@Override
	public String attack() {
		return name + " attacks with stones!";
	}
}