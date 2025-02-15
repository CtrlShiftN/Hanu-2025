package com.hanu.se.pr2.lect.week03.simpleOOP.demo;

public class ProductEnhancement {
	public static void main(String[] args) {
		// Create product with a discount
		Product2 productWithDiscount = new Product2("Laptop", 1000.0, 15.0);

		// Create product without a discount
		Product2 productWithoutDiscount = new Product2("Mouse", 50.0);

		// Display details of both products
		System.out.println("Product 1 Details:");
		productWithDiscount.displayInformation();

		System.out.println("\nProduct 2 Details:");
		productWithoutDiscount.displayInformation();
	}
}

class Product2 {
	private String name;
	private double price;
	private double discount;

	// Constructor with name, price, and discount
	public Product2(String name, double price, double discount) {
		this.name = name;
		this.price = price;
		this.discount = discount;
	}

	// Constructor with name and price (no discount)
	public Product2(String name, double price) {
		this.name = name;
		this.price = price;
		this.discount = 0.0;
	}

	// Public method to display product details
	public void displayInformation() {
		System.out.println("Product Name: " + name);
		System.out.println("Product Price: $" + price);
		System.out.println("Discount: " + discount + "%");
		System.out.println("Import Tax: $" + getImportTax());
	}

	// Private method to calculate import tax (10% of price)
	private double getImportTax() {
		return price * 0.10; // 10% tax
	}
}
