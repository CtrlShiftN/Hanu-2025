package com.hanu.se.pr2.lect.week11.generic.demo;

import java.io.Serializable;

public class Product implements Serializable {
	private static final long serialVersionUID = 1L;
	private static final int MAX_NAME_LENGTH = 50;

	private String name;
	private double price;

	// Constructor
	public Product(String name, double price) throws NotPossibleException {
		if (!isValidName(name)) {
			throw new NotPossibleException("init - Product name must be between 1 and 50 characters and cannot be empty.");
		}
		if (!isValidPrice(price)) {
			throw new NotPossibleException("init - Product price must be non-negative.");
		}
		this.name = name.trim();
		this.price = price;
	}

	// Getters
	public String getName() {
		return this.name;
	}

	public double getPrice() {
		return this.price;
	}

	// Setters with validation
	public void setName(String name) throws NotPossibleException {
		if (!isValidName(name)) {
			throw new NotPossibleException("setter - Product name must be between 1 and 50 characters and cannot be empty.");
		}
		this.name = name.trim();
	}

	public void setPrice(double price) throws NotPossibleException {
		if (!isValidPrice(price)) {
			throw new NotPossibleException("setter - Product price must be non-negative.");
		}
		this.price = price;
	}

	// Validation methods
	private boolean isValidName(String name) {
		return name != null && name.trim() != " " && name.trim().length() > 0
				&& name.trim().length() <= MAX_NAME_LENGTH ;
	}

	private boolean isValidPrice(double price) {
		return price >= 0.0;
	}

	// toString method
	@Override
	public String toString() {
		return "Product[{name=" + this.name + ", price=" + this.price + "}]";
	}
}
