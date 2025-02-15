package com.hanu.se.pr2.lect.week04.encapsulate.examples;

public class Product {
	// Properties
	private String name;
	private double price;
	private double discount;

	// Constructors
	public Product() {
	}

	public Product(String name) {
		this.name = name;
	}

	public Product(String name, double price) {
		this.name = name;
		this.price = price;
	}

	public Product(String name, double price, double discount) {
		this.name = name;
		this.price = price;
		this.discount = discount;
	}

	// Getters
	public String getName() {
		return this.name;
	}

	public double getPrice() {
		return this.price;
	}

	public double getDiscount() {
		return this.discount;
	}

	// Setters
	public void setPrice(double price) {
		this.price = price;
	}

	public void setDiscount(double discount) {
		this.discount = discount;
	}

	// Others
	public double calculateImportTax() {
		return this.price * 0.1;
	}

	public void displayInformation() {
		System.out.println(this.toString());
	}

	// toString()
	public String toString() {
		return "Product Name: " + this.getName() + "\r\n" + "Unit Price: $" + this.getPrice() + "\r\n" + "Discount: "
				+ this.getDiscount() + "%\r\n" + "Import Tax: $" + this.calculateImportTax() + "";
	}

	public static void main(String[] args) {
		// Creating a Product object
		Product product = new Product("Laptop", 1200.0, 15);

		// Display initial product information
		System.out.println("Initial Product Details:");
		product.displayInformation();
	}
}
