package com.hanu.se.pr2.lect.week07.collections.domain.tut;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class PersonTest {
	public static void main(String[] args) {
		List<Person> personList = new ArrayList<>();
		// Adding valid elements to the List
		try {
			personList.add(new Person(1, "Le Nam", "12-02-2005", "lenam@example.com", "0912345678", "Hanoi"));
			personList.add(new Person(2, "Nam", "12-02-2005", "nam@example.com", "0987654321", "HCM"));
			personList.add(new Person(3, "Lan", "12-02-2006", "lan@example.com", "0855555555", "Danang"));
			personList.add(new Person(4, "Lan", "12-02-2005", "lan2@example.com", "0977777777", "Hue"));
			personList.add(new Person(5, "John Doe", "25-12-1998", "john.doe@gmail.com", "0833333333", "Saigon"));
		} catch (Exception e) {
			System.out.println("Error adding person: " + e.getMessage());
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
