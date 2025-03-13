package com.hanu.se.pr2.lect.week07.collections.demo;

import java.util.List;

public interface StudentManagable {
	public void addStudent(Student student) throws Exception;

	public boolean removeStudent(String studentID) throws Exception;

	public Student searchStudentByID(String studentID) throws Exception;

	public void updateStudent(String studentID, Student student) throws Exception;

	public List<Student> getEnrolledStudent();
}
