package com.hanu.se.pr2.lect.week06.polymorphism.demo;

public class FireMonster extends MyMonster {

	public FireMonster(String name) {
		super(name);
	}

	@Override
	public String toString() {
		return "FireMonster[" + super.toString() + "]";
	}

	@Override
	public String attack() {
		return this.getName() + " attacks with fire!";
	}

}
