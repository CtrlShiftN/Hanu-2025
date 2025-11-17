package week11.binaryio.menu;

import java.util.*;

public class MenuDriven {
	public static void main(String[] args) {
		// Declaration
		Scanner sc = new Scanner(System.in);
		int option;
		boolean isStopped = false;
		do {
			// Prompt user to input option
			System.out.println("+---------------------+");
			System.out.println("| Choose an option:   |");
			System.out.println("| 1.  Add item        |");
			System.out.println("| 2.  Item list       |");
			System.out.println("| 3.  Edit an item    |");
			System.out.println("| 4.  Remove an item  |");
			System.out.println("| 5.  Quit            |");
			System.out.println("+---------------------+");
			try {
				option = sc.nextInt();
				switch (option) {
				case 1: {
					System.out.println("Adding a new item...");
					break;
				}
				case 2: {
					System.out.println("Listing all items...");
					break;
				}
				case 3: {
					System.out.println("Editing an item...");
					break;
				}
				case 4: {
					System.out.println("Removing an item...");
					break;
				}
				case 5: {
					System.out.println("Goodbye!");
					isStopped = true;
					break;
				}
				default:
					System.out.println("Invalid option!");
				}
			} catch (Exception e) {
				System.err.println(e.getMessage());
				continue;
			}
		} while (!isStopped);
	}
}
