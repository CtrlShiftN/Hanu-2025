package com.hanu.se.pr2.lect.week07.collections.domain.demo;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class StudentTest {

	public static void main(String[] args) {
		List<Student> studentList = new ArrayList<>();
		try {
			// Init a list of students
			studentList.add(new Student(1, "Lan", 2.6));
			studentList.add(new Student(2, "Son", 2.8));
			studentList.add(new Student(3, "Long", 3.6));
			studentList.add(new Student(4, "An", 1.3));
			studentList.add(new Student(5, "Nam", 4.0));
			// Print
			System.out.println("Before sorting...");
			for (Student student : studentList) {
				System.out.println(student);
			}
			Collections.sort(studentList);
			System.out.println("After sorting...");
			for (Student student : studentList) {
				System.out.println(student);
			}
			System.out.println("After sorting by GPA...");
			Collections.sort(studentList, new StudentSortedByGpaDesc());
			for (Student student : studentList) {
				System.out.println(student);
			}

		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
	}

}
