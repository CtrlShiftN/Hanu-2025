package com.hanu.se.pr2.lect.week07.collections.demo;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

public class Person {
	public int id;
	public String name;
	public String dateOfBirth;
	public String email;
	public String tel;
	public String address;

	public Person(int id, String name) throws Exception {
		if (!isValidId(id)) {
			throw new Exception("Invalid ID");
		}
		if (!isValidName(name)) {
			throw new Exception("Invalid Name");
		}
		this.id = id;
		this.name = name;
	}

	public Person(int id, String name, String dateOfBirth) throws Exception {
		if (!isValidId(id)) {
			throw new Exception("Invalid ID");
		}
		if (!isValidName(name)) {
			throw new Exception("Invalid Name");
		}
		if (!isValidDateOfBirth(dateOfBirth)) {
			throw new Exception("Invalid Date of Birth");
		}
		this.id = id;
		this.name = name;
		this.dateOfBirth = dateOfBirth;
	}

	public Person(int id, String name, String dateOfBirth, String email) throws Exception {
		if (!isValidId(id)) {
			throw new Exception("Invalid ID");
		}
		if (!isValidName(name)) {
			throw new Exception("Invalid Name");
		}
		if (!isValidDateOfBirth(dateOfBirth)) {
			throw new Exception("Invalid Date of Birth");
		}
		if (!isValidEmail(email)) {
			throw new Exception("Invalid Email");
		}
		this.id = id;
		this.name = name;
		this.dateOfBirth = dateOfBirth;
		this.email = email;
	}

	public Person(int id, String name, String dateOfBirth, String email, String tel) throws Exception {
		if (!isValidId(id)) {
			throw new Exception("Invalid ID");
		}
		if (!isValidName(name)) {
			throw new Exception("Invalid Name");
		}
		if (!isValidDateOfBirth(dateOfBirth)) {
			throw new Exception("Invalid Date of Birth");
		}
		if (!isValidEmail(email)) {
			throw new Exception("Invalid Email");
		}
		if (!isValidTel(tel)) {
			throw new Exception("Invalid Phone Number");
		}
		this.id = id;
		this.name = name;
		this.dateOfBirth = dateOfBirth;
		this.email = email;
		this.tel = tel;
	}

	public Person(int id, String name, String dateOfBirth, String email, String tel, String address) throws Exception {
		if (!isValidId(id)) {
			throw new Exception("Invalid ID");
		}
		if (!isValidName(name)) {
			throw new Exception("Invalid Name");
		}
		if (!isValidDateOfBirth(dateOfBirth)) {
			throw new Exception("Invalid Date of Birth");
		}
		if (!isValidEmail(email)) {
			throw new Exception("Invalid Email");
		}
		if (!isValidTel(tel)) {
			throw new Exception("Invalid Phone Number");
		}
		if (!isValidAddress(address)) {
			throw new Exception("Invalid Address");
		}
		this.id = id;
		this.name = name;
		this.dateOfBirth = dateOfBirth;
		this.email = email;
		this.tel = tel;
		this.address = address;
	}

	/**
	 * @return the name
	 */
	public String getName() {
		return this.name;
	}

	/**
	 * @param name the name to set
	 */
	public void setName(String name) throws Exception {
		if (!isValidName(name)) {
			throw new Exception("Invalid Name");
		}
		this.name = name.trim();
	}

	/**
	 * @return the email
	 */
	public String getEmail() {
		return this.email;
	}

	/**
	 * @param email the email to set
	 */
	public void setEmail(String email) throws Exception {
		if (!isValidEmail(email)) {
			throw new Exception("Invalid Email");
		}
		this.email = email.trim();
	}

	/**
	 * @return the tel
	 */
	public String getTel() {
		return this.tel;
	}

	/**
	 * @param tel the tel to set
	 */
	public void setTel(String tel) throws Exception {
		if (!isValidTel(tel)) {
			throw new Exception("Invalid Phone Number");
		}
		this.tel = tel.trim();
	}

	/**
	 * @return the address
	 */
	public String getAddress() {
		return this.address;
	}

	/**
	 * @param address the address to set
	 */
	public void setAddress(String address) throws Exception {
		if (!isValidAddress(address)) {
			throw new Exception("Invalid Address");
		}
		this.address = address.trim();
	}

	/**
	 * @return the id
	 */
	public int getId() {
		return this.id;
	}

	/**
	 * @return the dateOfBirth
	 */
	public String getDateOfBirth() {
		return this.dateOfBirth;
	}

	public boolean isValidId(int id) {
		return id >= 1;
	}

	public boolean isValidName(String name) {
		return !isEmptyString(name) && name.trim().length() <= 70 && name.matches("^[a-zA-Z\\s]*$");
	}

	public boolean isValidDateOfBirth(String dateOfBirth) {
		if (isEmptyString(dateOfBirth) && dateOfBirth.trim().length() == 10) {
			return false;
		}

		if (!dateOfBirth.trim().matches("^(0[1-9]|[12][0-9]|3[01])[-/.](0[1-9]|1[012])[-/.](19|20|21)\\d{2}$")) {
			return false;
		}
		try {
			// Convert date string to LocalDate
			DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd-MM-yyyy");
			LocalDate dob = LocalDate.parse(dateOfBirth, formatter);
			LocalDate today = LocalDate.now(); // Get current date

			// Ensure the date is not in the future
			return !dob.isAfter(today);
		} catch (Exception e) {
			return false; // Invalid date format
		}
	}

	public boolean isValidEmail(String email) {
		return !isEmptyString(email) && email.trim().length() <= 100
				&& email.trim().matches("^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$");
	}

	public boolean isValidTel(String tel) {
		return !isEmptyString(tel) && tel.trim().length() >= 10 && tel.trim().length() <= 12
				&& tel.trim().matches("^(\\+84|84|0)[2-9]\\d{8}$");
	}

	public boolean isValidAddress(String address) {
		return !isEmptyString(address) && address.trim().length() <= 100 && address.trim().matches("^\\w+$");
	}

	public boolean isEmptyString(String str) {
		return str == null || str.trim().equals("") || str.trim().equals(" ");
	}

	public boolean isValidPerson(int id, String name, String dateOfBirth) {
		return this.isValidId(id) && this.isValidName(name) && this.isValidDateOfBirth(dateOfBirth);
	}

	@Override
	public String toString() {
		return "Person [id=" + this.getId() + ", name=" + this.getName() + ", dateOfBirth=" + this.getDateOfBirth()
				+ ", email=" + this.getEmail() + ", tel=" + this.getTel() + ", address=" + this.getAddress() + "]";
	}
}
