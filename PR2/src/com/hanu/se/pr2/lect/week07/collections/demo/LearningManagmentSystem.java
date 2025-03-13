package com.hanu.se.pr2.lect.week07.collections.demo;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.Comparator;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class LearningManagmentSystem {
	private HashMap<String, Student> studentList = new HashMap<>();
	private HashMap<String, Course> courseList = new HashMap<>();
	private int studentIDCounter;
	private int courseIDCounter;

	public LearningManagmentSystem() {
		this.studentIDCounter = 1;
		this.courseIDCounter = 1;
	}

	public String generateStudentID() {
		String currentSeason = this.getCurrentSeason();
		Calendar now = Calendar.getInstance();
		return currentSeason.toUpperCase().substring(0, 2) + now.get(Calendar.YEAR) + (this.studentIDCounter++);
	}

	public String generateCourseID() {
		String currentSeason = this.getCurrentSeason();
		Calendar now = Calendar.getInstance();
		return currentSeason.toUpperCase().substring(0, 2) + now.get(Calendar.YEAR) + (this.courseIDCounter++);
	}

	// TODO: merge these two above methods into one

	public String getCurrentSeason() {
		String currentSeason = "";
		Calendar now = Calendar.getInstance();
		int currentMonth = now.get(Calendar.MONTH) + 1;
		switch (currentMonth) {
		case 1:
		case 2:
		case 3:
			currentSeason = "Spring";
			break;
		case 4:
		case 5:
		case 6:
			currentSeason = "Summer";
			break;
		case 7:
		case 8:
		case 9:
			currentSeason = "Autumn";
			break;
		case 10:
		case 11:
		case 12:
			currentSeason = "Winter";
			break;
		default:
			break;
		}
		return currentSeason;
	}

	// Add Student
	public String addStudent(Student student) {
		String studentID = this.generateStudentID();
		try {
			this.studentList.put(studentID, student);
			return studentID;
		} catch (Exception e) {
			System.out.println("Error adding student: " + e.getMessage());
			return null;
		}
	}

	// Add Course
	public String addCourse(Course course) {
		String courseID = this.generateCourseID();
		try {
			this.courseList.put(courseID, course);
			return courseID;
		} catch (Exception e) {
			System.out.println("Error adding course: " + e.getMessage());
			return null;
		}
	}

	// Remove Student
	public boolean removeStudent(String studentID) {
		return this.studentList.remove(studentID) != null;
	}

	// Remove Course
	public boolean removeCourse(String courseID) {
		return this.courseList.remove(courseID) != null;
	}

	// Search Student by Name
	public String searchStudentByName(String name) {
		for (Student student : this.studentList.values()) {
			if (student.getName().equalsIgnoreCase(name)) {
				return student.getStudentID();
			}
		}
		return "Student not found";
	}

	// Search Course by Name
	public String searchCourseByName(String name) {
		for (Course course : this.courseList.values()) {
			if (course.getName().equalsIgnoreCase(name)) {
				return course.getCourseID();
			}
		}
		return "Course not found";
	}

	// Get sorted list of Students by Name
	public List<Student> getSortedStudentsByGpa() {
		List<Student> sortedList = new ArrayList<>(this.studentList.values());
		sortedList.sort(Comparator.comparingDouble(Student::getGpa));
		return sortedList;
	}

	// Get sorted list of Courses by Credits
	public List<Course> getSortedCoursesByCredits() {
		List<Course> sortedList = new ArrayList<>(this.courseList.values());
		sortedList.sort(Comparator.comparingInt(Course::getCredits));
		return sortedList;
	}

	// Display all students
	public void displayAllStudents() {
		for (Student student : this.studentList.values()) {
			System.out.println(student);
		}
	}

	// Display all courses
	public void displayAllCourses() {
		for (Course course : this.courseList.values()) {
			System.out.println(course);
		}
	}
}
