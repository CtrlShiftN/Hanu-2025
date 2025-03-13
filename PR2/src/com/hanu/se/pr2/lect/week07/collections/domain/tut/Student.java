package com.hanu.se.pr2.lect.week07.collections.domain.tut;

public class Student extends Person implements Comparable<Student> {
	private String studentID;
	private double gpa = 0.0;

	public Student(int id, String name, String dateOfBirth, String email, String tel, String address, String studentID,
			double gpa) throws Exception {
		super(id, name, dateOfBirth, email, tel, address);
		if (!isValidStudentID(studentID)) {
			throw new Exception("Student Error: Invalid Student ID");
		}
		if (!isValidGpa(gpa)) {
			throw new Exception("Student Error: Invalid GPA");
		}
		this.studentID = studentID;
		this.gpa = gpa;
	}

	public Student(int id, String name, String dateOfBirth, String email, String tel, String studentID, double gpa)
			throws Exception {
		super(id, name, dateOfBirth, email, tel);
		if (!isValidStudentID(studentID)) {
			throw new Exception("Student Error: Invalid Student ID");
		}
		if (!isValidGpa(gpa)) {
			throw new Exception("Student Error: Invalid GPA");
		}
		this.studentID = studentID;
		this.gpa = gpa;
	}

	public Student(int id, String name, String dateOfBirth, String email, String studentID, double gpa)
			throws Exception {
		super(id, name, dateOfBirth, email);
		if (!isValidStudentID(studentID)) {
			throw new Exception("Student Error: Invalid Student ID");
		}
		if (!isValidGpa(gpa)) {
			throw new Exception("Student Error: Invalid GPA");
		}
		this.studentID = studentID;
		this.gpa = gpa;
	}

	public Student(int id, String name, String dateOfBirth, String studentID, double gpa) throws Exception {
		super(id, name, dateOfBirth);
		if (!isValidStudentID(studentID)) {
			throw new Exception("Student Error: Invalid Student ID");
		}
		if (!isValidGpa(gpa)) {
			throw new Exception("Student Error: Invalid GPA");
		}
		this.studentID = studentID;
		this.gpa = gpa;
	}

	public Student(int id, String name, String dateOfBirth, String email, String tel, String address, String studentID)
			throws Exception {
		super(id, name, dateOfBirth, email, tel, address);
		if (!isValidStudentID(studentID)) {
			throw new Exception("Student Error: Invalid Student ID");
		}
		this.studentID = studentID;
	}

	public Student(int id, String name, String dateOfBirth, String email, String tel, String studentID)
			throws Exception {
		super(id, name, dateOfBirth, email, tel);
		if (!isValidStudentID(studentID)) {
			throw new Exception("Student Error: Invalid Student ID");
		}
		this.studentID = studentID;
	}

	public Student(int id, String name, String dateOfBirth, String email, String studentID) throws Exception {
		super(id, name, dateOfBirth, email);
		if (!isValidStudentID(studentID)) {
			throw new Exception("Student Error: Invalid Student ID");
		}
		this.studentID = studentID;
	}

	public Student(int id, String name, String dateOfBirth, String studentID) throws Exception {
		super(id, name, dateOfBirth);
		if (!isValidStudentID(studentID)) {
			throw new Exception("Student Error: Invalid Student ID");
		}
		this.studentID = studentID;
	}

	public String getStudentID() {
		return this.studentID;
	}

//	public void setStudentID(String studentID) throws Exception {
//		if (!isValidStudentID(studentID)) {
//			throw new Exception("Student Error: Invalid Student ID");
//		}
//		this.studentID = studentID;
//	}

	public double getGpa() {
		return this.gpa;
	}

	public void setGpa(double gpa) throws Exception {
		if (!isValidGpa(gpa)) {
			throw new Exception("Student Error: Invalid GPA");
		}
		this.gpa = gpa;
	}

	private boolean isValidStudentID(String studentID) {
		return studentID != null && studentID.trim().length() > 0 && studentID.trim().matches("^[a-zA-Z0-9]+$")
				&& studentID.trim().length() <= 20;
	}

	private boolean isValidGpa(double gpa) {
		return gpa >= 0.0 && gpa <= 4.0;
	}

	@Override
	public String toString() {
		return "Student [" + super.toString() + ",studentID=" + this.getStudentID() + ",gpa=" + this.getGpa() + "]";
	}

	@Override
	public int compareTo(Student o) {
		return Double.compare(this.getGpa(), o.getGpa());
	}

}
