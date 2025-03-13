package com.hanu.se.pr2.lect.week07.collections.domain.tut;

import java.util.List;

public interface StudentManageable {
	public void addStudent(Student student) throws Exception;

	public boolean removeStudent(String studentID) throws Exception;

	public Student searchStudentByID(String studentID) throws Exception;

	public void updateStudent(String studentID, Student student) throws Exception;

	public List<Student> getEnrolledStudent();
}
