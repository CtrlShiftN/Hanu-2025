package com.hanu.se.pr2.lect.week07.collections.demo;

import java.util.ArrayList;
import java.util.List;

public class Student extends Person {
	public String studentID;
	public double gpa;

	public Student(int id, String name, String studentID, double gpa) throws Exception {
		super(id, name);
		if (!isValidStudentID(studentID)) {
			throw new Exception("Student: Invalid ID");
		}
		if (!isValidGpa(gpa)) {
			throw new Exception("Student: Invalid GPA");
		}
		this.studentID = studentID;
		this.gpa = gpa;
	}

	public Student(int id, String name, String dateOfBirth, String email, String tel, String address, String studentID)
			throws Exception {
		super(id, name, dateOfBirth, email, tel, address);
		if (!isValidStudentID(studentID)) {
			throw new Exception("Student: Invalid ID");
		}
		this.studentID = studentID;
	}

	public Student(int id, String name, String dateOfBirth, String email, String tel, String studentID)
			throws Exception {
		super(id, name, dateOfBirth, email, tel);
		if (!isValidStudentID(studentID)) {
			throw new Exception("Student: Invalid ID");
		}
		this.studentID = studentID;
	}

	public Student(int id, String name, String dateOfBirth, String email, String studentID) throws Exception {
		super(id, name, dateOfBirth, email);
		if (!isValidStudentID(studentID)) {
			throw new Exception("Student: Invalid ID");
		}
		this.studentID = studentID;
	}

	public Student(int id, String name, String dateOfBirth, String studentID) throws Exception {
		super(id, name, dateOfBirth);
		if (!isValidStudentID(studentID)) {
			throw new Exception("Student: Invalid ID");
		}
		this.studentID = studentID;
	}

	public Student(int id, String name, String studentID) throws Exception {
		super(id, name);
		if (!isValidStudentID(studentID)) {
			throw new Exception("Student: Invalid ID");
		}
		this.studentID = studentID;
	}

	public Student(int id, String name, String dateOfBirth, String email, String tel, String address, String studentID,
			double gpa) throws Exception {
		super(id, name, dateOfBirth, email, tel, address);
		if (!isValidStudentID(studentID)) {
			throw new Exception("Student: Invalid ID");
		}
		if (!isValidGpa(gpa)) {
			throw new Exception("Student: Invalid GPA");
		}
		this.studentID = studentID;
		this.gpa = gpa;
	}

	public Student(int id, String name, String dateOfBirth, String email, String tel, String studentID, double gpa)
			throws Exception {
		super(id, name, dateOfBirth, email, tel);
		if (!isValidStudentID(studentID)) {
			throw new Exception("Student: Invalid ID");
		}
		if (!isValidGpa(gpa)) {
			throw new Exception("Student: Invalid GPA");
		}
		this.studentID = studentID;
		this.gpa = gpa;
	}

	public Student(int id, String name, String dateOfBirth, String email, String studentID, double gpa)
			throws Exception {
		super(id, name, dateOfBirth, email);
		if (!isValidStudentID(studentID)) {
			throw new Exception("Student: Invalid ID");
		}
		if (!isValidGpa(gpa)) {
			throw new Exception("Student: Invalid GPA");
		}
		this.studentID = studentID;
		this.gpa = gpa;
	}

	public Student(int id, String name, String dateOfBirth, String studentID, double gpa) throws Exception {
		super(id, name, dateOfBirth);
		if (!isValidStudentID(studentID)) {
			throw new Exception("Student: Invalid ID");
		}
		if (!isValidGpa(gpa)) {
			throw new Exception("Student: Invalid GPA");
		}
		this.studentID = studentID;
		this.gpa = gpa;
	}

	/**
	 * @return the gpa
	 */
	public double getGpa() {
		return this.gpa;
	}

	/**
	 * @param gpa the gpa to set
	 */
	public void setGpa(double gpa) throws Exception {
		if (!isValidGpa(gpa)) {
			throw new Exception("Student: Invalid GPA");
		}
		this.gpa = gpa;
	}

	/**
	 * @return the studentID
	 */
	public String getStudentID() {
		return this.studentID;
	}

	public boolean isValidStudentID(String studentID) {
		return !super.isEmptyString(studentID) && studentID.trim().length() <= 10 && studentID.trim().matches("^\\w+$");
	}

	public boolean isValidGpa(double gpa) {
		return gpa >= 0.0 && gpa <= 4.0;
	}

	@Override
	public String toString() {
		return "Student [" + super.toString() + ", studentID=" + this.getStudentID() + ", gpa=" + this.getGpa() + "]";
	}

}
