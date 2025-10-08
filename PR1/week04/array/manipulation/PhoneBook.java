package week04.array.manipulation;

import java.util.*;

public class PhoneBook {

	public static void main(String[] args) {
		// Declaration
		Scanner sc = new Scanner(System.in);
		String keyword;
		String[] contactName = { "Michael Myers", "Ash Williams", "William Stronghold" };
		String[] contactNumber = { "333-8000", "333-2323", "333-1221" };

		// Prompt user to input s.th
		System.out.println("Enter name to look up: ");
		keyword = sc.next();

		// Process
		int count = 0;
		for (int i = 0; i < contactName.length; i++) {
			if (contactName[i].toLowerCase().contains(keyword.toLowerCase())) {
				System.out.println("A result is found for \"" + contactName[i] + "\".");
				System.out.println("The phone number is: " + contactNumber[i]);
				count++;
			}
		}

		// Display || Return
		if (count == 0) {
			System.out.println("No result is found for \"" + keyword + "\"");
		}
	}

}
