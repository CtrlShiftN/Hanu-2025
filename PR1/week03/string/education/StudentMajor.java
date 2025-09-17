package week03.string.education;

import java.util.*;

public class StudentMajor {
	public static void main(String[] args) {
		// Declaration
		Scanner sc = new Scanner(System.in);
		String userInput, result = "";
		char major, year;

		// Prompt user to input s.th
		System.out.println("Enter two characters: ");
		userInput = sc.nextLine();

		// Process: Compute, calculate,...
		major = userInput.charAt(0);
		year = userInput.charAt(1);

		// Display || Return
//		if ("mciMCI".indexOf(major) >= 0 && "1234".indexOf(year) >= 0) {
//			if (major == 'm' || major == 'M') {
//				result += "Mathematics";
//			} else if (major == 'c' || major == 'C') {
//				result += "Computer Science";
//			} else {
//				result += "Information Technology";
//			}
//			result += " ";
//			if (year == '1') {
//				result += "Freshman";
//			} else if (year == '2') {
//				result += "Sophomore";
//			} else if (year == '3') {
//				result += "Junior";
//			} else {
//				result += "Senior";
//			}
//		} else {
//			result = "Invalid input";
//		}

		// 02.
//		if ("mciMCI".indexOf(major) >= 0 && "1234".indexOf(year) >= 0) {
//			switch (major) {
//			case 'm':
//			case 'M':
//				result += "Mathematics";
//				break;
//			case 'c':
//			case 'C':
//				result += "Computer Science";
//				break;
//			case 'i':
//			case 'I':
//				result += "Information Technology";
//				break;
//			}
//			switch (year) {
//			case '1':
//				result += " Freshman";
//				break;
//			case '2':
//				result += " Sophomore";
//				break;
//			case '3':
//				result += " Junior";
//				break;
//			case '4':
//				result += " Senior";
//				break;
//			}
//		} else {
//			result = "Invalid input";
//		}

		// 03.
//		if ("mciMCI".indexOf(major) >= 0 && "1234".indexOf(year) >= 0) {
//			result += (major == 'm' || major == 'M') ? "Mathematics"
//					: (major == 'c' || major == 'C') ? "Computer Science" : "Information Technology";
//			result += " ";
//			result += (year == '1') ? "Freshman" : (year == '2') ? "Sophomore" : (year == '3') ? "Junior" : "Senior";
//		} else {
//			result = "Invalid input";
//		}
		
		// 04.
		if ("mciMCI".indexOf(major) >= 0 && "1234".indexOf(year) >= 0) {
			String[] majorArr = {"Mathematics", "Computer Science", "Information Technology"};
			String[] statusArr = {"Freshman", "Sophomore", "Junior", "Senior"};
			major = Character.toLowerCase(major);
			result = majorArr["mci".indexOf(major)] + " " + statusArr["1234".indexOf(year)];
		}else {
			result = "Invalid input";
		}
		
		System.out.println(result);
	}
}
