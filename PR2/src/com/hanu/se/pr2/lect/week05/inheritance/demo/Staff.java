package com.hanu.se.pr2.lect.week05.inheritance.demo;

public class Staff extends Person {
	private String school;
	private double pay;

	public Staff(String name, String address, String school, double pay) {
		super(name, address);
		this.school = school;
		this.pay = pay;
	}

	public String getSchool() {
		return this.school;
	}

	public void setSchool(String school) {
		this.school = school;
	}

	public double getPay() {
		return this.pay;
	}

	public void setPay(double pay) {
		this.pay = pay;
	}

	@Override
	public String toString() {
		return "Staff[" + super.toString() + ",school=" + this.getSchool() + ",pay=" + this.getPay() + "]";
	}

}
