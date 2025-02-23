package com.hanu.se.pr2.lect.week05.demo;

//Parent class Person
class Person {
	private String name;
	private String address;

	// Constructor
	public Person(String name, String address) {
		this.name = name;
		this.address = address;
	}

	// Getters and Setters
	public String getName() {
		return name;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	// toString method
	@Override
	public String toString() {
		return "Person[name=" + name + ",address=" + address + "]";
	}
}

//Subclass Student extending Person
class Student extends Person {
	private String program;
	private int year;
	private double fee;

	// Constructor
	public Student(String name, String address, String program, int year, double fee) {
		super(name, address);
		this.program = program;
		this.year = year;
		this.fee = fee;
	}

	// Getters and Setters
	public String getProgram() {
		return program;
	}

	public void setProgram(String program) {
		this.program = program;
	}

	public int getYear() {
		return year;
	}

	public void setYear(int year) {
		this.year = year;
	}

	public double getFee() {
		return fee;
	}

	public void setFee(double fee) {
		this.fee = fee;
	}

	// toString method
	@Override
	public String toString() {
		return "Student[" + super.toString() + ", program=" + program + ", year=" + year + ", fee=" + fee + "]";
	}
}

//Subclass Staff extending Person
class Staff extends Person {
	private String school;
	private double pay;

	// Constructor
	public Staff(String name, String address, String school, double pay) {
		super(name, address);
		this.school = school;
		this.pay = pay;
	}

	// Getters and Setters
	public String getSchool() {
		return school;
	}

	public void setSchool(String school) {
		this.school = school;
	}

	public double getPay() {
		return pay;
	}

	public void setPay(double pay) {
		this.pay = pay;
	}

	// toString method
	@Override
	public String toString() {
		return "Staff[" + super.toString() + ", school=" + school + ", pay=" + pay + "]";
	}
}

