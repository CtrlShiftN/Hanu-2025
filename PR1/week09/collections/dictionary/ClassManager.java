package week09.collections.dictionary;

import java.util.*;

public class ClassManager {

	public static void main(String[] args) {
		// Declaration
		Scanner sc = new Scanner(System.in);
		TreeMap<String, ArrayList<String>> classMan = new TreeMap<String, ArrayList<String>>();
		String classNameTemp, studentNameTemp;
		int userOption;
		boolean isStopped = false;

		// Prompt user to input student info
		do {
			System.out.println("+-----------------------------------+");
			System.out.println("||  Choose an option:              ||");
			System.out.println("||  1. Add a student               ||");
			System.out.println("||  2. Display students in a class ||");
			System.out.println("||  3. Quit                        ||");
			System.out.println("+-----------------------------------+");
			userOption = sc.nextInt();
			if (userOption >= 1 && userOption <= 3) {
				if (userOption == 1) {
					System.out.println("Enter class name: ");
					classNameTemp = sc.next();
					ArrayList<String> studentList;
					if (classMan.containsKey(classNameTemp)) {
						studentList = classMan.get(classNameTemp);
					} else {
						studentList = new ArrayList<>();
					}
					System.out.println("Enter student name: ");
					studentNameTemp = sc.next();
					studentList.add(studentNameTemp);
					classMan.put(classNameTemp, studentList);
				} else if (userOption == 2) {
					System.out.println("Enter class name: ");
					classNameTemp = sc.next();
					if (classMan.containsKey(classNameTemp)) {
						ArrayList<String> studentList = classMan.get(classNameTemp);
						System.out.println(studentList.toString());
					} else {
						System.out.println("404! Class not found!");
					}
				} else {
					System.out.println("Quit!...");
					isStopped = true;
				}
			} else {
				System.out.println("Invalid user options!");
			}
		} while (!isStopped);

		// Process
		// Display
	}

}
