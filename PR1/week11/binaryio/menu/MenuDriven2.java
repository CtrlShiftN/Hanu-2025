package week11.binaryio.menu;

import java.util.*;

public class MenuDriven2 {
	public static void main(String[] args) {
		// Declaration
		Scanner sc = new Scanner(System.in);
		int option, itemIndex;
		boolean isStopped = false;
		List<String> itemList = new ArrayList<>();

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
				sc.nextLine();
				switch (option) {
				case 1: {
					System.out.println("Adding a new item...");
					System.out.println("Enter the name of the item: ");
					String itemName = sc.nextLine();
					itemList.add(itemName);
					System.out.println("Added a new item!");
					break;
				}
				case 2: {
					System.out.println("Listing all items...");
					int count = 1;
					for (String item : itemList) {
						System.out.printf("%d. %s\n", count, item);
						count++;
					}
					break;
				}
				case 3: {
					System.out.println("Editing an item...");
					System.out.println("Enter item index: ");
					itemIndex = sc.nextInt();
					sc.nextLine();
					if (itemIndex >= 0 && itemIndex < itemList.size()) {
						System.out.println("Enter new name for the item: " + itemList.get(itemIndex));
						String newItemName = sc.nextLine();
						itemList.set(itemIndex, newItemName);
						System.out.println("The item's info has changed!");
					} else {
						System.out.println("Invalid item index! The program has stopped...");
						isStopped = true;
					}
					break;
				}
				case 4: {
					System.out.println("Removing an item...");
					System.out.println("Enter item index: ");
					itemIndex = sc.nextInt();
					sc.nextLine();
					if (itemIndex >= 0 && itemIndex < itemList.size()) {
						itemList.remove(itemIndex);
					} else {
						System.out.println("Invalid item index! The program has stopped...");
						isStopped = true;
					}
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
