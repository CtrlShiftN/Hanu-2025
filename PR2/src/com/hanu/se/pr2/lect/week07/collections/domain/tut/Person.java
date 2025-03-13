package com.hanu.se.pr2.lect.week07.collections.domain.tut;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

public class Person {
	private int id;
	private String name;
	private String dateOfBirth;
	private String email;
	private String tel;
	private String address;

	public Person(int id, String name, String dateOfBirth, String email, String tel, String address) throws Exception {
		if (!isValidID(id)) {
			throw new Exception("Person Error: Invalid ID");
		}
		if (!isValidName(name)) {
			throw new Exception("Person Error: Invalid Name");
		}
		if (!isValidDateOfBirth(dateOfBirth)) {
			throw new Exception("Person Error: Invalid Date Of Birth");
		}
		if (!isValidEmail(email)) {
			throw new Exception("Person Error: Invalid Email");
		}
		if (!isValidTel(tel)) {
			throw new Exception("Person Error: Invalid Phone Number");
		}
		if (!isValidAddress(address)) {
			throw new Exception("Person Error: Invalid Address");
		}
		this.id = id;
		this.name = name;
		this.dateOfBirth = dateOfBirth;
		this.email = email;
		this.tel = tel;
		this.address = address;
	}

	public Person(int id, String name, String dateOfBirth, String email, String tel) throws Exception {
		if (!isValidID(id)) {
			throw new Exception("Person Error: Invalid ID");
		}
		if (!isValidName(name)) {
			throw new Exception("Person Error: Invalid Name");
		}
		if (!isValidDateOfBirth(dateOfBirth)) {
			throw new Exception("Person Error: Invalid Date Of Birth");
		}
		if (!isValidEmail(email)) {
			throw new Exception("Person Error: Invalid Email");
		}
		if (!isValidTel(tel)) {
			throw new Exception("Person Error: Invalid Phone Number");
		}
		this.id = id;
		this.name = name;
		this.dateOfBirth = dateOfBirth;
		this.email = email;
		this.tel = tel;
	}

	public Person(int id, String name, String dateOfBirth, String email) throws Exception {
		if (!isValidID(id)) {
			throw new Exception("Person Error: Invalid ID");
		}
		if (!isValidName(name)) {
			throw new Exception("Person Error: Invalid Name");
		}
		if (!isValidDateOfBirth(dateOfBirth)) {
			throw new Exception("Person Error: Invalid Date Of Birth");
		}
		if (!isValidEmail(email)) {
			throw new Exception("Person Error: Invalid Email");
		}
		this.id = id;
		this.name = name;
		this.dateOfBirth = dateOfBirth;
		this.email = email;
	}

	public Person(int id, String name, String dateOfBirth) throws Exception {
		if (!isValidID(id)) {
			throw new Exception("Person Error: Invalid ID");
		}
		if (!isValidName(name)) {
			throw new Exception("Person Error: Invalid Name");
		}
		if (!isValidDateOfBirth(dateOfBirth)) {
			throw new Exception("Person Error: Invalid Date Of Birth");
		}
		this.id = id;
		this.name = name;
		this.dateOfBirth = dateOfBirth;
	}

	public String getName() {
		return this.name;
	}

	public void setName(String name) throws Exception {
		if (!isValidName(name)) {
			throw new Exception("Person Error: Invalid Name");
		}
		this.name = name;
	}

	public String getDateOfBirth() {
		return this.dateOfBirth;
	}

	public void setDateOfBirth(String dateOfBirth) throws Exception {
		if (!isValidDateOfBirth(dateOfBirth)) {
			throw new Exception("Person Error: Invalid Date Of Birth");
		}
		this.dateOfBirth = dateOfBirth;
	}

	public String getEmail() {
		return this.email;
	}

	public void setEmail(String email) throws Exception {
		if (!isValidEmail(email)) {
			throw new Exception("Person Error: Invalid Email");
		}
		this.email = email;
	}

	public String getTel() {
		return this.tel;
	}

	public void setTel(String tel) throws Exception {
		if (!isValidTel(tel)) {
			throw new Exception("Person Error: Invalid Phone Number");
		}
		this.tel = tel;
	}

	public String getAddress() {
		return this.address;
	}

	public void setAddress(String address) throws Exception {
		if (!isValidAddress(address)) {
			throw new Exception("Person Error: Invalid Address");
		}
		this.address = address;
	}

	public int getId() {
		return this.id;
	}

	private boolean isValidID(int id) {
		return id > 0;
	}

	private boolean isValidName(String name) {
		return name != null && name.trim() != "" && name.length() <= 50;
	}

	private boolean isValidDateOfBirth(String dob) {
		if (dob == null || dob.trim() == "" || dob.trim().length() != 10) {
			return false;
		}

		if (!dob.trim().matches("^(0[1-9]|[12][0-9]|3[01])[-/.](0[1-9]|1[012])[-/.](19|20|21)\\d{2}$")) {
			return false;
		}
		try {
			// Convert date string to LocalDate
			DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd-MM-yyyy");
			LocalDate dateOfBirth = LocalDate.parse(dob, formatter);
			LocalDate today = LocalDate.now(); // Get current date
			// Ensure the date is not in the future
			return !dateOfBirth.isAfter(today);
		} catch (Exception e) {
			return false; // Invalid date format
		}
	}

	private boolean isValidEmail(String email) {
		return email != null && email.trim().length() > 5 && email.trim().length() <= 100
				&& email.trim().matches("^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$");
	}

	private boolean isValidTel(String tel) {
		return tel != null && tel.trim().length() > 5 && tel.trim().length() >= 10 && tel.trim().length() <= 12
				&& tel.trim().matches("^(\\+84|84|0)[2-9]\\d{8}$");
	}

	private boolean isValidAddress(String address) {
		return address != null && address.trim().length() >= 3 && address.trim().length() <= 255;
	}

	@Override
	public String toString() {
		return "Person [getName()=" + getName() + ", getDateOfBirth()=" + getDateOfBirth() + ", getEmail()="
				+ getEmail() + ", getTel()=" + getTel() + ", getAddress()=" + getAddress() + ", getId()=" + getId()
				+ "]";
	}

}
