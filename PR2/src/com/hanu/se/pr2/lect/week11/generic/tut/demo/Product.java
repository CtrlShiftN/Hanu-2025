package com.hanu.se.pr2.lect.week11.generic.tut.demo;

import java.io.Serializable;

public class Product implements Serializable {
	private String name;
	private double price;

	public Product(String name, double price) throws NotPossibleException {
		if (!isValidName(name)) {
			throw new NotPossibleException("setter - Invalid name!");
		}
		if (!isValidPrice(price)) {
			throw new NotPossibleException("setter - Invalid price!");
		}
		this.name = name.trim();
		this.price = price;
	}

	public Product(String name) throws NotPossibleException {
		if (!isValidName(name)) {
			throw new NotPossibleException("setter - Invalid name!");
		}
		if (!isValidPrice(price)) {
			throw new NotPossibleException("setter - Invalid price!");
		}
		this.name = name.trim();
		this.price = 0.0;
	}

	public String getName() {
		return this.name;
	}

	public void setName(String name) throws NotPossibleException {
		if (!isValidName(name)) {
			throw new NotPossibleException("setter - Invalid name!");
		}
		this.name = name.trim();
	}

	public double getPrice() {
		return this.price;
	}

	public void setPrice(double price) throws NotPossibleException {
		if (!isValidPrice(price)) {
			throw new NotPossibleException("setter - Invalid price!");
		}
		this.price = price;
	}

	private boolean isValidName(String name) {
		return name != null && name.trim() != " " && name.trim().length() > 0;
	}

	private boolean isValidPrice(double price) {
		return price > 0.0;
	}

	@Override
	public String toString() {
		return "Product [name=" + this.getName() + ", price=" + this.getPrice() + "]";
	}

}
