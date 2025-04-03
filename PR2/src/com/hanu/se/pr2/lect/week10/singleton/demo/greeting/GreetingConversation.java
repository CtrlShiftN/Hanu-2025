package com.hanu.se.pr2.lect.week10.singleton.demo.greeting;

public class GreetingConversation {

	public static void main(String[] args) {
		// Main method of GreetingConversation
		try {
			// Test creating persons
			Person p1 = new Person(1, "Quan Dang");
			Person p2 = new Person(2, "Thuan Nguyen");
			System.out.println("Created Persons: ");
			System.out.println(p1);
			System.out.println(p2);

			// Test creating mobile phones
			MobilePhone m1 = MobilePhone.getInstance();
			MobilePhone m2 = MobilePhone.getInstance();
			System.out.println("Created Mobile Phones: ");
			if (m1.equals(m2)) {
				System.out.println("Two objects point to the same memory location on the heap i.e, to the same object");
			} else {
				System.out.println("Two objects DO NOT point to the same memory location on the heap");
			}

			// Test assigning phones
			m1.setManName("APhone");
			m1.setColor("#0033ff");
			m1.setGuarantee(true);
			m1.setYear(2015);
			m1.setModel("M-ABC-123");
			m2.setManName("CPhone");
			m2.setColor("#123456");
			m2.setGuarantee(false);
			m2.setYear(2024);
			m2.setModel("Model A");
			p1.setPhone(m1);
			p2.setPhone(m2);
			System.out.println("Persons after assigning phones: ");
			System.out.println(p1);
			System.out.println(p2);

			// Test greeting
			p1.greet();
			p2.greet();
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
	}
}
