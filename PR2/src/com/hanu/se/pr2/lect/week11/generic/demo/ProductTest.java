package com.hanu.se.pr2.lect.week11.generic.demo;

import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;

public class ProductTest {
	public static void main(String[] args) {
		System.out.println("Running test cases for Product class");

		// Valid Product Creation
		try {
			Product validProduct = new Product("Laptop", 999.99);
			System.out.println("Valid product created " + validProduct);
		} catch (Exception e) {
			System.out.println("Failed " + e.getMessage());
		}

		// Empty Name Invalid Case
		try {
			Product invalidProduct1 = new Product("", 500);
			System.out.println("Should not succeed " + invalidProduct1);
		} catch (Exception e) {
			System.out.println("Caught expected error " + e.getMessage());
		}

		// Name exceeding 50 characters Invalid Case
		try {
			Product invalidProduct2 = new Product("This Product Name Is Way Too Long And Should Fail Validation", 150);
			System.out.println("Should not succeed " + invalidProduct2);
		} catch (Exception e) {
			System.out.println("Caught expected error " + e.getMessage());
		}

		// Negative Price Invalid Case
		try {
			Product invalidProduct3 = new Product("TV", -100);
			System.out.println("Should not succeed " + invalidProduct3);
		} catch (Exception e) {
			System.out.println("Caught expected error " + e.getMessage());
		}

		// Zero Price Valid Case
		try {
			Product freeProduct = new Product("Free Gift", 0);
			System.out.println("Zero price product created " + freeProduct);
		} catch (Exception e) {
			System.out.println("Failed " + e.getMessage());
		}

		// Name with Leading and Trailing Spaces Valid Case
		try {
			Product trimmedNameProduct = new Product("   Smartphone   ", 750);
			System.out.println("Trimmed name product created " + trimmedNameProduct);
		} catch (Exception e) {
			System.out.println("Failed " + e.getMessage());
		}

		// Updating Product Name to an Invalid Value
		try {
			Product updateTest = new Product("Tablet", 300);
			System.out.println("Initial product " + updateTest);
			updateTest.setName("");
			System.out.println("Should not succeed " + updateTest);
		} catch (Exception e) {
			System.out.println("Caught expected error " + e.getMessage());
		}

		// Updating Product Price to a Negative Value Invalid Case
		try {
			Product updateTest2 = new Product("Monitor", 250);
			System.out.println("Initial product " + updateTest2);
			updateTest2.setPrice(-50);
			System.out.println("Should not succeed " + updateTest2);
		} catch (Exception e) {
			System.out.println("Caught expected error " + e.getMessage());
		}

		// Serialization and Deserialization Test
		try {
			Product originalProduct = new Product("Smart Watch", 199.99);
			String filename = "./src/demo/product.ser";

			// Serialize Product
			FileOutputStream fileOut = new FileOutputStream(filename);
			ObjectOutputStream out = new ObjectOutputStream(fileOut);
			out.writeObject(originalProduct);
			out.close();
			fileOut.close();
			System.out.println("Product serialized successfully");

			// Deserialize Product
			FileInputStream fileIn = new FileInputStream(filename);
			ObjectInputStream in = new ObjectInputStream(fileIn);
			Product deserializedProduct = (Product) in.readObject();
			in.close();
			fileIn.close();

			// Check if deserialized object matches original
			if (originalProduct.toString().equals(deserializedProduct.toString())) {
				System.out.println("Serialization test passed " + deserializedProduct);
			} else {
				System.out.println("Serialization test failed");
			}
		} catch (Exception e) {
			System.out.println("Serialization test error " + e.getMessage());
		}

		System.out.println("Test cases execution completed");
	}
}
