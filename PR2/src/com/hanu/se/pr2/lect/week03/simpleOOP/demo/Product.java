package com.hanu.se.pr2.lect.week03.simpleOOP.demo;

import java.util.*;

public class Product {
	// Attrs
	public String name;
	public double price;
	public double discount;

	// Constructors
	public Product() {
	}

	public Product(String name, double price) {
		this.name = name;
		this.price = price;
		this.discount = 0.0;
	}

	public Product(String name, double price, double discount) {
		this.name = name;
		this.price = price;
		this.discount = discount;
	}

	// Getters + Setters
	// Validators
	// Comparators
	// toString()
	// other methods
	private double calculateImportTax() {
		return this.price * 0.1;
	}

	public void displayInformation() {
		System.out.println("Product Name: " + this.name);
		System.out.println("Product Price: " + this.price);
		System.out.println("Discount: " + this.discount);
		System.out.println("Import Tax: " + this.calculateImportTax());
	}

	public void input(Scanner sc) {
		System.out.println("Enter name:");
		this.name = sc.nextLine();
		System.out.println("Enter price:");
		this.price = sc.nextDouble();
		System.out.println("Enter discount:");
		this.discount = sc.nextDouble();
		sc.nextLine();
	}

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		// Create two Product objects
		Product product1 = new Product();
		Product product2 = new Product();

		// Input details for both products
		System.out.println("Enter details for Product 1:");
		product1.input(scanner);

		System.out.println("Enter details for Product 2:");
		product2.input(scanner);

		// Display details of both products
		System.out.println("\nProduct 1 Details:");
		product1.displayInformation();

		System.out.println("\nProduct 2 Details:");
		product2.displayInformation();

		scanner.close(); // Close the scanner
	}
}
