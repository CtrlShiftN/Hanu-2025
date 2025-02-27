package com.hanu.se.pr2.lect.week06.polymorphism.demo;

public abstract class MyMonster {
	private String name;

	public MyMonster() {
	}

	public MyMonster(String name) {
		this.name = name;
	}

	public String getName() {
		return this.name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public abstract String attack();

	public String toString() {
		return "Monster[name=" + this.getName() + "]";
	}
}
