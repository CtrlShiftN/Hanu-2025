package com.hanu.se.pr2.lect.week07.collections.domain.tut;

import java.util.ArrayList;
import java.util.List;

public class Course implements StudentManageable {
	private String courseID;
	private String name;
	private int credits;
	private Department department;
	private Semester semester;
	private List<Student> enrolledStudent = new ArrayList<Student>();

	public Course(String courseID, String name, int credit, Department department, Semester semester,
			ArrayList<Student> enrolledStudent) throws Exception {
		if (!isValidCourseID(courseID)) {
			throw new Exception("Course Error: Invalid Course ID");
		}
		if (!isValidName(name)) {
			throw new Exception("Course Error: Invalid Name");
		}
		if (!isValidCredits(credit)) {
			throw new Exception("Course Error: Invalid Credits");
		}
		if (!isValidDepartment(department)) {
			throw new Exception("Course Error: Invalid Department");
		}
		if (!isValidSemester(semester)) {
			throw new Exception("Course Error: Invalid Semester");
		}
		if (!isValidEnrolledStudent(enrolledStudent)) {
			throw new Exception("Course Error: Invalid Enrolled Student");
		}
		this.courseID = courseID;
		this.name = name;
		this.credits = credit;
		this.department = department;
		this.semester = semester;
		this.enrolledStudent = enrolledStudent;
	}

	public Course(String courseID, String name, int credit, Department department, Semester semester) throws Exception {
		if (!isValidCourseID(courseID)) {
			throw new Exception("Course Error: Invalid Course ID");
		}
		if (!isValidName(name)) {
			throw new Exception("Course Error: Invalid Name");
		}
		if (!isValidCredits(credit)) {
			throw new Exception("Course Error: Invalid Credits");
		}
		if (!isValidDepartment(department)) {
			throw new Exception("Course Error: Invalid Department");
		}
		if (!isValidSemester(semester)) {
			throw new Exception("Course Error: Invalid Semester");
		}
		this.courseID = courseID;
		this.name = name;
		this.credits = credit;
		this.department = department;
		this.semester = semester;
	}

	public String getName() {
		return this.name;
	}

	public void setName(String name) throws Exception {
		if (!isValidName(name)) {
			throw new Exception("Course Error: Invalid Name");
		}
		this.name = name;
	}

	public int getCredits() {
		return this.credits;
	}

	public void setCredits(int credits) throws Exception {
		if (!isValidCredits(credits)) {
			throw new Exception("Course Error: Invalid Credits");
		}
		this.credits = credits;
	}

	public Department getDepartment() {
		return this.department;
	}

	public void setDepartment(Department department) throws Exception {
		if (!isValidDepartment(department)) {
			throw new Exception("Course Error: Invalid Department");
		}
		this.department = department;
	}

	public Semester getSemester() {
		return this.semester;
	}

	public void setSemester(Semester semester) throws Exception {
		if (!isValidSemester(semester)) {
			throw new Exception("Course Error: Invalid Semester");
		}
		this.semester = semester;
	}

	public List<Student> getEnrolledStudent() {
		return this.enrolledStudent;
	}

	public void setEnrolledStudent(List<Student> enrolledStudent) throws Exception {
		if (!isValidEnrolledStudent(enrolledStudent)) {
			throw new Exception("Course Error: Invalid Enrolled Student");
		}
		this.enrolledStudent = enrolledStudent;
	}

	public String getCourseID() {
		return this.courseID;
	}

	private boolean isValidCourseID(String courseID) {
		return courseID != null && courseID.trim().length() > 0 && courseID.trim().matches("^[a-zA-Z0-9]+$")
				&& courseID.trim().length() < 20;
	}

	private boolean isValidName(String name) {
		return name != null && name.trim().length() > 0 && name.trim().matches("^[a-zA-Z0-9]+$")
				&& name.trim().length() <= 50;
	}

	private boolean isValidCredits(int credit) {
		return credit >= 1 && credit <= 20;
	}

	private boolean isValidSemester(Semester semester) {
		for (Semester s : Semester.values()) {
			if (s == semester) {
				return true;
			}
		}
		return false;
	}

	private boolean isValidDepartment(Department department) {
		for (Department d : Department.values()) {
			if (d == department) {
				return true;
			}
		}
		return false;
	}

	private boolean isValidEnrolledStudent(List<Student> enrolledStudent) {
		return enrolledStudent.size() > 0;
	}

	@Override
	public String toString() {
		return "Course [getName()=" + getName() + ", getCredits()=" + getCredits() + ", getDepartment()="
				+ getDepartment() + ", getSemester()=" + getSemester() + ", getEnrolledStudent()="
				+ getEnrolledStudent() + ", getCourseID()=" + getCourseID() + "]";
	}

	@Override
	public boolean removeStudent(String studentID) throws Exception {
		if (studentID == null || studentID.trim().length() == 0) {
			throw new Exception("Course: Invalid Student ID");
		}
		return this.enrolledStudent.removeIf(student -> student.getStudentID().equals(studentID));
	}

	@Override
	public Student searchStudentByID(String studentID) throws Exception {
		if (studentID == null || studentID.trim().length() == 0) {
			throw new Exception("Course: Invalid Student ID");
		}
		for (Student student : enrolledStudent) {
			if (student.getStudentID().equals(studentID)) {
				return student;
			}
		}
		throw new Exception("Course: Student not found");
	}

	@Override
	public void addStudent(Student student) throws Exception {
		if (student == null) {
			throw new Exception("Course: Cannot add null student");
		}
		if (enrolledStudent.contains(student)) {
			throw new Exception("Course: Student already enrolled");
		}
		this.enrolledStudent.add(student);
	}

	@Override
	public void updateStudent(String studentID, Student student) throws Exception {
		if (studentID == null || studentID.trim().length() == 0 || student == null) {
			throw new Exception("Course: Invalid parameters for updating student");
		}
		for (int i = 0; i < this.enrolledStudent.size(); i++) {
			if (enrolledStudent.get(i).getStudentID().equals(studentID)) {
				enrolledStudent.set(i, student);
				return;
			}
		}
		throw new Exception("Course: Student not found");
	}

}
