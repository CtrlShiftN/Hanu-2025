package com.hanu.se.pr2.lect.week09.io.demo;

import java.io.Serializable;

class NotPossibleException extends Exception {
	public NotPossibleException(String message) {
		super("NotPossibleException: " + message);
	}
}

public class Student implements Serializable {
	private String name;
	private double mark = 0.0;
	private String faculty;

	public Student(String name, String faculty, double mark) throws NotPossibleException {
		if (!isValidName(name)) {
			throw new NotPossibleException("Invalid Student Name");
		}
		if (!isValidMark(mark)) {
			throw new NotPossibleException("Invalid Mark");
		}
		if (!isValidFaculty(faculty)) {
			throw new NotPossibleException("Invalid Student Faculty");
		}
		this.name = name;
		this.faculty = faculty;
		this.mark = mark;
	}

	public Student(String name, String faculty) throws NotPossibleException {
		if (!isValidName(name)) {
			throw new NotPossibleException("Invalid Student Name");
		}
		if (!isValidFaculty(faculty)) {
			throw new NotPossibleException("Invalid Student Faculty");
		}
		this.name = name;
		this.faculty = faculty;
	}

	public String getName() {
		return this.name;
	}

	public void setName(String name) throws NotPossibleException {
		if (!isValidName(name)) {
			throw new NotPossibleException("Invalid Student Name");
		}
		this.name = name;
	}

	public double getMark() {
		return this.mark;
	}

	public void setMark(double mark) throws NotPossibleException {
		if (!isValidMark(mark)) {
			throw new NotPossibleException("Invalid Mark");
		}
		this.mark = mark;
	}

	public String getFaculty() {
		return this.faculty;
	}

	public void setFaculty(String faculty) throws NotPossibleException {
		if (!isValidFaculty(faculty)) {
			throw new NotPossibleException("Invalid Student Faculty");
		}
		this.faculty = faculty;
	}

	private boolean isValidName(String name) {
		return name != null && name.trim().length() >= 1 && name.matches("^[a-zA-Z]+$");
	}

	private boolean isValidFaculty(String faculty) {
		return faculty != null && faculty.trim().length() >= 1 && faculty.matches("^[a-zA-Z]+$");
	}

	private boolean isValidMark(double mark) {
		return mark >= 0.0 && mark <= 10.0;
	}

	public String toString() {
		return "Student[name=" + this.getName() + ",mark=" + this.getMark() + ",faculty=" + this.getFaculty() + "]";
	}
}
