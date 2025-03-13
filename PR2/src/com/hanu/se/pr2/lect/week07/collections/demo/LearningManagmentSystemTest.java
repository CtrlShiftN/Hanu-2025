package com.hanu.se.pr2.lect.week07.collections.demo;

import java.util.List;

public class LearningManagmentSystemTest {

	public static void main(String[] args) {
		LearningManagmentSystem lms = new LearningManagmentSystem();

		try {
			// Adding Students
			Student student1 = new Student(1, "Le Nam", "13-02-2005", "lenam@example.com", "0912345678", "Hanoi",
					"S001", 3.5);
			Student student2 = new Student(2, "Nam", "11-02-2005", "nam@example.com", "0987654321", "HCM", "S002", 3.8);
			Student student3 = new Student(3, "Lan", "12-02-2006", "lan@example.com", "0855555555", "Danang", "S003",
					2.9);

			String student1ID = lms.addStudent(student1);
			String student2ID = lms.addStudent(student2);
			String student3ID = lms.addStudent(student3);

			System.out.println("Added Students:");
			lms.displayAllStudents();

			// Adding Courses
			Course course1 = new Course("CSE101", "Data Structures", 3, Department.Computer_Science, Semester.Fall);
			Course course2 = new Course("MAT201", "Calculus", 4, Department.Mathematics, Semester.Spring);
			Course course3 = new Course("SE301", "Software Engineering", 3, Department.Software_Engineering,
					Semester.Winter);

			String course1ID = lms.addCourse(course1);
			String course2ID = lms.addCourse(course2);
			String course3ID = lms.addCourse(course3);

			System.out.println("\nAdded Courses:");
			lms.displayAllCourses();

			// Searching for students
			System.out.println("\nSearching for Le Nam: " + lms.searchStudentByName("Le Nam"));
			System.out.println("Searching for Unknown Student: " + lms.searchStudentByName("Unknown"));

			// Searching for courses
			System.out.println("\nSearching for Calculus: " + lms.searchCourseByName("Calculus"));
			System.out.println("Searching for Unknown Course: " + lms.searchCourseByName("Physics"));

			// Sorting Students by GPA
			System.out.println("\nSorted Students by GPA:");
			List<Student> sortedStudents = lms.getSortedStudentsByGpa();
			for (Student student : sortedStudents) {
				System.out.println(student);
			}

			// Sorting Courses by Credits
			System.out.println("\nSorted Courses by Credits:");
			List<Course> sortedCourses = lms.getSortedCoursesByCredits();
			for (Course course : sortedCourses) {
				System.out.println(course);
			}

			// Removing a Student
			System.out.println("\nRemoving Student: " + student2ID);
			lms.removeStudent(student2ID);
			System.out.println("Students after removal:");
			lms.displayAllStudents();

			// Removing a Course
			System.out.println("\nRemoving Course: " + course2ID);
			lms.removeCourse(course2ID);
			System.out.println("Courses after removal:");
			lms.displayAllCourses();
		} catch (Exception e) {
			System.out.println("Error: " + e.getMessage());
		}
	}

}
