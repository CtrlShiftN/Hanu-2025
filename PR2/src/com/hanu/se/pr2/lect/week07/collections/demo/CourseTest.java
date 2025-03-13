package com.hanu.se.pr2.lect.week07.collections.demo;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class CourseTest {

	public static void main(String[] args) {
		List<Course> courseList = new ArrayList<Course>();

		// Adding valid courses
		try {
			courseList.add(new Course("CSE101", "Introduction to CS", 3, Department.Computer_Science, Semester.Fall));
			courseList.add(new Course("MTH102", "Calculus I", 4, Department.Mathematics, Semester.Spring));
			courseList
					.add(new Course("IS201", "Information Systems", 3, Department.Information_System, Semester.Winter));
			courseList.add(
					new Course("SE301", "Software Engineering", 3, Department.Software_Engineering, Semester.Summer));
		} catch (Exception e) {
			System.out.println("Error adding course: " + e.getMessage());
		}

		// Invalid cases
		System.out.println("Testing Invalid Cases:");
		Object[][] testCases = { { "", "Introduction to AI", 3, Department.Computer_Science, Semester.Fall }, // Empty
																												// ID
				{ "AI202", "", 3, Department.Computer_Science, Semester.Fall }, // Empty Name
				{ "AI202", "Artificial Intelligence", -1, Department.Computer_Science, Semester.Fall }, // Invalid
																										// Credit
				{ "AI202", "Artificial Intelligence", 3, null, Semester.Fall }, // Null Department
				{ "AI202", "Artificial Intelligence", 3, Department.Computer_Science, null } // Null Semester
		};

		for (Object[] testCase : testCases) {
			try {
				Course c = new Course((String) testCase[0], (String) testCase[1], (int) testCase[2],
						(Department) testCase[3], (Semester) testCase[4]);
				System.out.println("Passed: " + c);
			} catch (Exception e) {
				System.out.println("Failed: " + e.getMessage());
			}
		}

		// Display before sorting
		System.out.println("\nBefore Sorting:");
		for (Course course : courseList) {
			System.out.println(course);
		}

		// Sorting by different comparators
		Collections.sort(courseList, new SortCourseByNameAsc());
		System.out.println("\nSorted by Name:");
		for (Course course : courseList) {
			System.out.println(course);
		}

		Collections.sort(courseList, new SortCourseByCreditAsc());
		System.out.println("\nSorted by Credit:");
		for (Course course : courseList) {
			System.out.println(course);
		}

		Collections.sort(courseList, new SortCourseByDepartmentAsc());
		System.out.println("\nSorted by Department:");
		for (Course course : courseList) {
			System.out.println(course);
		}

		Collections.sort(courseList, new SortCourseBySemesterAsc());
		System.out.println("\nSorted by Semester:");
		for (Course course : courseList) {
			System.out.println(course);
		}

		// Testing student management methods
		System.out.println("\nTesting Student Management:");
		try {
			// Create course instances
			Course course1 = new Course("CSE101", "Data Structures", 3, Department.Computer_Science, Semester.Fall);
			Course course2 = new Course("MAT201", "Calculus", 4, Department.Mathematics, Semester.Spring);
			Course course3 = new Course("SE301", "Software Engineering", 3, Department.Software_Engineering,
					Semester.Winter);

			// Print initial courses
			System.out.println("Initial Courses:");
			System.out.println(course1);
			System.out.println(course2);
			System.out.println(course3);

			// Test setters
			course1.setName("Advanced Data Structures");
			course2.setCredits(5);
			course3.setCredits(20);
			System.out.println("\nUpdated Courses:");
			System.out.println(course1);
			System.out.println(course2);
			System.out.println(course3);

			// Create student instances
			Student student1 = new Student(1, "Le Nam", "13-02-2005", "lenam@example.com", "0912345678", "Hanoi",
					"S001", 3.5);
			Student student2 = new Student(2, "Nam", "11-02-2005", "nam@example.com", "0987654321", "HCM", "S002",
					3.8);
			Student student3 = new Student(3, "Lan", "12-02-2006", "lan@example.com", "0855555555", "Danang", "S003",
					2.9);
			Student student4 = new Student(4, "Lan", "12-02-2005", "lan2@example.com", "0977777777", "Hue", "S004",
					3.2);
			Student student5 = new Student(5, "John Doe", "25-12-1998", "john.doe@gmail.com", "0833333333", "Saigon",
					"S005", 3.0);

			// Add students to course1
			course1.addStudent(student1);
			course1.addStudent(student2);
			System.out.println(
					"\nEnrolled Students in " + course1.getName() + ": " + course1.getEnrolledStudent().size());
			course2.addStudent(student3);
			course2.addStudent(student4);
			System.out.println(
					"\nEnrolled Students in " + course2.getName() + ": " + course2.getEnrolledStudent().size());
			course3.addStudent(student5);
			System.out.println(
					"\nEnrolled Students in " + course3.getName() + ": " + course3.getEnrolledStudent().size());

			// Search for a student
			Student foundStudent = course1.searchStudentByID("S002");
			System.out.println("\nFound Student: " + foundStudent);

			// Update student
			Student updatedStudent = new Student(6, "John Smith", "13-12-1968", "john.smith@gmail.com", "0834444444", "Thai Nguyen",
					"S006", 3.0);
			course1.updateStudent("S002", updatedStudent);
			System.out.println("\nUpdated Student List: " + course1.getEnrolledStudent());

			// Remove student
			course1.removeStudent("S001");
			System.out.println("\nStudent List after removal: " + course1.getEnrolledStudent());

		} catch (Exception e) {
			System.out.println("Error: " + e.getMessage());
		}
	}

}
