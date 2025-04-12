package com.hanu.se.pr2.lect.week07.collections.demo;

import java.util.ArrayList;
import java.util.List;

public class Admin extends Person {
	private static Admin instance = null;
	private String role;
	private static List<Person> personList = new ArrayList<>();

	// Private constructor (singleton)
	private Admin(int id, String name, String dateOfBirth, String email, String tel, String address, String role)
			throws Exception {
		super(id, name, dateOfBirth, email, tel, address);
		if (!isValidRole(role)) {
			throw new NotPossibleException("Invalid role.");
		}
		this.role = role;
	}

	// Singleton getInstance
	public static Admin getInstance(int id, String name, String dateOfBirth, String email, String tel, String address,
			String role) throws Exception {
		if (instance == null) {
			instance = new Admin(id, name, dateOfBirth, email, tel, address, role);
		}
		return instance;
	}

	// Getter and Setter for role
	public String getRole() {
		return role;
	}

	public void setRole(String role) throws NotPossibleException {
		if (!isValidRole(role)) {
			throw new NotPossibleException("Invalid role.");
		}
		this.role = role;
	}

	private boolean isValidRole(String role) {
		return role != null && role.trim() != " " && role.trim().length() >= 1 && role.trim().matches("^[a-zA-Z\\s]*$");
	}

	// Functionalities

	public void addPerson(Person p) throws NotPossibleException {
		for (Person existing : personList) {
			if (existing.getId() == p.getId()) {
				throw new NotPossibleException("Person with same ID already exists.");
			}
		}
		personList.add(p);
	}

	public boolean removePersonById(int id) {
		return personList.removeIf(p -> p.getId() == id);
	}

	public Person findPersonByEmail(String email) {
		for (Person p : personList) {
			if (p.getEmail() != null && p.getEmail().equals(email)) {
				return p;
			}
		}
		return null;
	}

	public void updatePerson(int id, Person newPerson) throws Exception {
		try {
			this.personList.set(id, newPerson);
		} catch (Exception e) {
			throw new NotPossibleException("Person not found for update.");
		}
	}

	// For testing (optional)
	public static List<Person> getAllPersons() {
		return personList;
	}

	@Override
	public String toString() {
		return "Admin [" + super.toString() + ", role=" + role + "]";
	}
}
