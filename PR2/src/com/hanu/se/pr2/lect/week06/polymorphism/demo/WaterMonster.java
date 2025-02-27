package com.hanu.se.pr2.lect.week06.polymorphism.demo;

public class WaterMonster extends MyMonster {
	public WaterMonster(String name) {
		super(name);
	}

	@Override
	public String toString() {
		return "WaterMonster[" + super.toString() + "]";
	}

	@Override
	public String attack() {
		return this.getName() + " attacks with water!";
	}

}
