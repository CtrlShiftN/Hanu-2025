package com.hanu.se.pr2.lect.week04.encapsulate.demo;

class Product {
	// Private attributes for encapsulation
	private String name;
	private double price;
	private double discount;

	// Constructor
	public Product(String name, double price, double discount) {
		this.name = name;
		this.price = price;
		this.discount = discount;
	}

	// Getter and Setter for name
	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	// Getter and Setter for price
	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	// Getter and Setter for discount
	public double getDiscount() {
		return discount;
	}

	public void setDiscount(double discount) {
		this.discount = discount;
	}

	// Method to calculate import tax (10% of price)
	public double calculateImportTax() {
		return price * 0.10;
	}

	// Method to display product information
	public void displayInformation() {
		System.out.println("Product Name: " + name);
		System.out.println("Unit Price: $" + price);
		System.out.println("Discount: " + discount + "%");
		System.out.println("Import Tax: $" + calculateImportTax());
	}
}

// Main class to demonstrate the functionality
public class Main {
	public static void main(String[] args) {
		// Creating a Product object
		Product product = new Product("Laptop", 1200.0, 15);

		// Display initial product information
		System.out.println("Initial Product Details:");
		product.displayInformation();

		// Modifying product details using setters
		product.setName("Gaming Laptop");
		product.setPrice(1500.0);
		product.setDiscount(10);

		// Display updated product information using getters
		System.out.println("\nUpdated Product Details:");
		System.out.println("Product Name: " + product.getName());
		System.out.println("Unit Price: $" + product.getPrice());
		System.out.println("Discount: " + product.getDiscount() + "%");
		System.out.println("Import Tax: $" + product.calculateImportTax());
	}
}
