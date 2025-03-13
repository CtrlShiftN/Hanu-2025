package com.hanu.se.pr2.lect.week07.collections.demo;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class StudentTest {

	public static void main(String[] args) {
		List<Student> studentList = new ArrayList<>();

		// Adding valid students to the list
		try {
			studentList.add(new Student(1, "Le Nam", "13-02-2005", "lenam@example.com", "0912345678", "Hanoi", "S001", 3.5));
			studentList.add(new Student(2, "Nam", "11-02-2005", "nam@example.com", "0987654321", "HCM", "S002", 3.8));
			studentList.add(new Student(3, "Lan", "12-02-2006", "lan@example.com", "0855555555", "Danang", "S003", 2.9));
			studentList.add(new Student(4, "Lan", "12-02-2005", "lan2@example.com", "0977777777", "Hue", "S004", 3.2));
			studentList.add(new Student(5, "John Doe", "25-12-1998", "john.doe@gmail.com", "0833333333", "Saigon",
					"S005", 3.0));
			System.out.println("Successfully added valid students.");
		} catch (Exception e) {
			System.out.println("Error adding student: " + e.getMessage());
		}

		// Testing invalid cases
		System.out.println("\nTesting Invalid Cases:");
		String[][] testCases = {
				{ "0", "John Doe", "12-05-1990", "johndoe@example.com", "0912345678", "Hanoi", "", "3.5" }, // Empty student ID
				{ "1", "", "12-05-1990", "johndoe@example.com", "0912345678", "Hanoi", "S007", "3.2" }, // Empty name
				{ "2", "John123", "12-05-1990", "johndoe@example.com", "0912345678", "Hanoi", "S008", "2.8" }, // Name with digits
				{ "3", "John Doe", "1990-05-12", "johndoe@example.com", "0912345678", "Hanoi", "S009", "3.0" }, // Wrong date format
				{ "4", "John Doe", "12-05-2090", "johndoe@example.com", "0912345678", "Hanoi", "S010", "3.1" }, // Future date
				{ "5", "John Doe", "12-05-1990", "invalidEmail", "0912345678", "Hanoi", "S011", "2.5" }, // Invalid email
				{ "6", "John Doe", "12-05-1990", "johndoe@example.com", "+84123abc456", "Hanoi", "S012", "2.0" }, // Invalid phone
				{ "7", "John Doe", "12-05-1990", "johndoe@example.com", "0912345678", "", "S013", "3.3" }, // Empty address
				{ "8", "John Doe", "12-05-1990", "johndoe@example.com", "0912345678", "Hanoi", "S014", "4.5" } // Invalid GPA out of range
		};

		for (String[] testCase : testCases) {
			try {
				Student s = new Student(Integer.parseInt(testCase[0]), testCase[1], testCase[2], testCase[3],
						testCase[4], testCase[5], testCase[6], Double.parseDouble(testCase[7]));
				System.out.println("Passed: " + s);
			} catch (Exception e) {
				System.out.println("Failed: " + e.getMessage());
			}
		}

		// Testing setters
		System.out.println("\nTesting Setters:");
		try {
			Student testStudent = new Student(10, "Valid Student", "01-01-2000", "valid@example.com", "0912345678",
					"Hanoi", "S015", 3.5);

			// Valid GPA update
			testStudent.setGpa(3.9);
			System.out.println("GPA updated successfully: " + testStudent.getGpa());

			// Invalid GPA update
			try {
				testStudent.setGpa(4.5);
			} catch (Exception e) {
				System.out.println("Caught exception for invalid GPA update: " + e.getMessage());
			}
		} catch (Exception e) {
			System.out.println("Unexpected error: " + e.getMessage());
		}

		// Display list before sorting
		System.out.println("\nBefore Sorting:");
		for (Student student : studentList) {
			System.out.println(student);
		}

		// Sorting list using StudentGpaComparator (ascending order)
		Collections.sort(studentList, new SortStudentByGpaDesc());

		// Display list after sorting
		System.out.println("\nAfter Sorting by GPA (ascending):");
		for (Student student : studentList) {
			System.out.println(student);
		}
	}

}
