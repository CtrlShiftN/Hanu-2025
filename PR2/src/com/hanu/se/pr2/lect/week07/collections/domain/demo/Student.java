package com.hanu.se.pr2.lect.week07.collections.domain.demo;

public class Student implements Comparable<Student> {
	// Properties
	private int studentID;
	private String fullname;
	private double gpa;

	// Constructors
	public Student(int studentID, String fullname) throws Exception {
		if (repOk(studentID, fullname, studentID)) {
			this.studentID = studentID;
			this.fullname = fullname;
		} else {
			throw new Exception("Error: Invalid Student Init!");
		}
	}

	public Student(int studentID, String fullname, double gpa) throws Exception {
		if (!isValidStudentID(studentID)) {
			throw new Exception("Student Error: Invalid Student ID");
		}
		if (!isValidFullname(fullname)) {
			throw new Exception("Student Error: Invalid Fullname");
		}
		if (!isValidGpa(gpa)) {
			throw new Exception("Student Error: Invalid GPA");
		}
		this.studentID = studentID;
		this.fullname = fullname;
		this.gpa = gpa;
	}
	// Getters & Setters

	public int getStudentID() {
		return this.studentID;
	}

	public String getFullname() {
		return this.fullname;
	}

	public void setFullname(String fullname) throws Exception {
		if (!isValidFullname(fullname)) {
			throw new Exception("Student Error: Invalid Fullname");
		}
		this.fullname = fullname;
	}

	public double getGpa() {
		return this.gpa;
	}

	public void setGpa(double gpa) throws Exception {
		if (!isValidGpa(gpa)) {
			throw new Exception("Student Error: Invalid GPA");
		}
		this.gpa = gpa;
	}

	// Validators
	private boolean isValidStudentID(int studentID) {
		return studentID > 0;
	}

	private boolean isValidFullname(String fullname) {
		return fullname != null && fullname != "" && fullname.trim() != "" && fullname.length() <= 50;
	}

	private boolean isValidGpa(double gpa) {
		return gpa >= 0.0 && gpa <= 4.0;
	}

	private boolean repOk(int studentID, String name, double gpa) {
		return isValidStudentID(studentID) && isValidFullname(name) && isValidGpa(gpa);
	}

	private boolean isValid(int studentID, String name) {
		return isValidStudentID(studentID) && isValidFullname(name);
	}
	// toString

	@Override
	public String toString() {
		return "Student [studentID=" + this.getStudentID() + ", fullname=" + this.getFullname() + ", gpa="
				+ this.getGpa() + "]";
	}

	@Override
	public int compareTo(Student o) {
		return this.getFullname().compareToIgnoreCase(o.getFullname());
	}

	// compareTo
}
