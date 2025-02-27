package com.hanu.se.pr2.lect.week06.polymorphism.demo;

public class StoneMonster extends MyMonster {
	public StoneMonster(String name) {
		super(name);
	}

	@Override
	public String toString() {
		return "StoneMonster[" + super.toString() + "]";
	}

	@Override
	public String attack() {
		return this.getName() + " attacks with stone!";
	}

}
