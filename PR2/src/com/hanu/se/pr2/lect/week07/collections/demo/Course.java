package com.hanu.se.pr2.lect.week07.collections.demo;

import java.util.ArrayList;
import java.util.List;

public class Course implements StudentManagable {
	private String courseID;
	private String name;
	private int credits;
	private Department department;
	private Semester semester;
	private List<Student> enrolledStudent = new ArrayList<>();

	public Course(String courseID, String name, int credit, Department department, Semester semester) throws Exception {
		if (!isValidCourseID(courseID)) {
			throw new Exception("Course: Invalid course ID");
		}
		if (!isValidName(name)) {
			throw new Exception("Course: Invalid course name");
		}
		if (!isValidCredit(credit)) {
			throw new Exception("Course: Invalid credit value");
		}
		if (!isValidDepartment(department)) {
			throw new Exception("Course: Invalid department");
		}
		if (!isValidSemester(semester)) {
			throw new Exception("Course: Invalid semester");
		}
		this.courseID = courseID;
		this.name = name;
		this.credits = credit;
		this.department = department;
		this.semester = semester;
	}

	public String getCourseID() {
		return this.courseID;
	}

	public String getName() {
		return this.name;
	}

	public int getCredits() {
		return this.credits;
	}

	public Department getDepartment() {
		return this.department;
	}

	public Semester getSemester() {
		return this.semester;
	}

	public void setCourseID(String courseID) throws Exception {
		if (!isValidCourseID(courseID)) {
			throw new Exception("Course: Invalid Course ID");
		}
		this.courseID = courseID;
	}

	public void setName(String name) throws Exception {
		if (!isValidName(name)) {
			throw new Exception("Course: Invalid Course Name");
		}
		this.name = name;
	}

	public void setCredits(int credits) throws Exception {
		if (!isValidCredit(credits)) {
			throw new Exception("Course: Invalid Credit Value");
		}
		this.credits = credits;
	}

	public void setDepartment(Department department) throws Exception {
		if (!isValidDepartment(department)) {
			throw new Exception("Course: Invalid Department");
		}
		this.department = department;
	}

	public void setSemester(Semester semester) throws Exception {
		if (!isValidSemester(semester)) {
			throw new Exception("Course: Invalid Semester");
		}
		this.semester = semester;
	}

	public void setEnrolledStudent(ArrayList<Student> enrolledStudent) throws Exception {
		if (!isValidEnrolledStudent(enrolledStudent)) {
			throw new Exception("Course: Invalid Enrolled Student List");
		}
		this.enrolledStudent = enrolledStudent;
	}

	private boolean isValidCourseID(String courseID) {
		return !isEmptyString(courseID) && courseID.trim().length() <= 10;
	}

	private boolean isEmptyString(String str) {
		return str == null || str.trim().equals("") || str.trim().equals(" ");
	}

	private boolean isValidName(String name) {
		return !isEmptyString(name) && name.trim().length() <= 50;
	}

	private boolean isValidCredit(int credit) {
		return credit > 0 && credit <= 10;
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

	private boolean isValidEnrolledStudent(ArrayList<Student> enrolledList) {
		return !enrolledList.isEmpty();
	}

	@Override
	public String toString() {
		return "Course [courseID=" + this.getCourseID() + ", name=" + this.getName() + ", credits=" + this.getCredits()
				+ ", department=" + this.getDepartment() + ", semester=" + this.getSemester() + ", enrolledStudent="
				+ this.getEnrolledStudent().size() + "]";
	}

	@Override
	public void addStudent(Student student) throws Exception {
		if (student == null) {
			throw new Exception("Course: Cannot add null student");
		}
		if (enrolledStudent.contains(student)) {
			throw new Exception("Course: Student already enrolled");
		}
		enrolledStudent.add(student);
	}

	@Override
	public boolean removeStudent(String studentID) throws Exception {
		if (isEmptyString(studentID)) {
			throw new Exception("Course: Invalid Student ID");
		}
		return this.enrolledStudent.removeIf(student -> student.getStudentID().equals(studentID));
	}

	@Override
	public Student searchStudentByID(String studentID) throws Exception {
		if (isEmptyString(studentID)) {
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
	public void updateStudent(String studentID, Student updatedStudent) throws Exception {
		if (isEmptyString(studentID) || updatedStudent == null) {
			throw new Exception("Course: Invalid parameters for updating student");
		}
		for (int i = 0; i < this.enrolledStudent.size(); i++) {
			if (enrolledStudent.get(i).getStudentID().equals(studentID)) {
				enrolledStudent.set(i, updatedStudent);
				return;
			}
		}
		throw new Exception("Course: Student not found");
	}

	@Override
	public List<Student> getEnrolledStudent() {
		return this.enrolledStudent;
	}
}
