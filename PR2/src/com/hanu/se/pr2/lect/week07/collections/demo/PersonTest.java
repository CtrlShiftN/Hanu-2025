package com.hanu.se.pr2.lect.week07.collections.demo;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class PersonTest {

	public static void main(String[] args) throws Exception {
		List<Person> personList = new ArrayList<>();
		// Adding valid elements to the List
		try {
			personList.add(new Person(1, "Le Nam", "13-02-2005", "lenam@example.com", "0912345678", "Hanoi"));
			personList.add(new Person(2, "Nam", "11-02-2005", "nam@example.com", "0987654321", "HCM"));
			personList.add(new Person(3, "Lan", "12-02-2006", "lan@example.com", "0855555555", "Danang"));
			personList.add(new Person(4, "Lan", "12-02-2005", "lan2@example.com", "0977777777", "Hue"));
			personList.add(new Person(5, "John Doe", "25-12-1998", "john.doe@gmail.com", "0833333333", "Saigon"));
		} catch (Exception e) {
			System.out.println("Error adding person: " + e.getMessage());
		}
		// Invalid cases
		System.out.println("Testing Invalid Cases:");
		String[][] testCases = { { "0", "John Doe", "12-05-1990", "johndoe@example.com", "0912345678", "Hanoi" }, // Invalid																								// ≥1)
				{ "1", "", "12-05-1990", "johndoe@example.com", "0912345678", "Hanoi" }, // Empty Name
				{ "2", "John123", "12-05-1990", "johndoe@example.com", "0912345678", "Hanoi" }, // Name with digits
				{ "3", "John Doe", "1990-05-12", "johndoe@example.com", "0912345678", "Hanoi" }, // Wrong date format
				{ "4", "John Doe", "12-05-2090", "johndoe@example.com", "0912345678", "Hanoi" }, // Future date
				{ "5", "John Doe", "12-05-1990", "invalidEmail", "0912345678", "Hanoi" }, // Invalid email
				{ "6", "John Doe", "12-05-1990", "johndoe@example.com", "+84123abc456", "Hanoi" }, // Invalid phone
				{ "7", "John Doe", "12-05-1990", "johndoe@example.com", "0912345678", "" }, // Empty address
				{ "8", "John Doe", "12-05-1990", "johndoe@example.com", "0912345678", "A@!@# Hanoi" } // Invalid address
																										// (special
																										// chars)
		};

		for (String[] testCase : testCases) {
			try {
				Person p = new Person(Integer.parseInt(testCase[0]), testCase[1], testCase[2], testCase[3], testCase[4],
						testCase[5]);
				System.out.println("Passed: " + p);
			} catch (Exception e) {
				System.out.println("Failed: " + e.getMessage());
			}
		}

		// Display list before sorting
		System.out.println("\nBefore Sorting:");
		for (Person person : personList) {
			System.out.println(person);
		}

		// Sorting list using SortPersonByNameAgeAsc comparator
		Collections.sort(personList, new SortPersonByNameAgeAsc());

		// Display list after sorting
		System.out.println("\nAfter Sorting:");
		for (Person person : personList) {
			System.out.println(person);
		}
	}

}
