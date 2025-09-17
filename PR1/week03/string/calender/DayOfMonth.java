package week03.string.calender;

import java.util.*;

public class DayOfMonth {
	public static void main(String[] args) {
		// Declaration
		Scanner sc = new Scanner(System.in);
		short year;
		String month, result = "";
		boolean isLeapYear;

		// Prompt user to input s.th
		System.out.println("Enter a year: ");
		year = sc.nextShort();
		System.out.println("Enter a month: ");
		month = sc.next();

		// Process
		isLeapYear = (year % 4 == 0 && year % 100 != 0) || (year % 400 == 0);
		month = month.toLowerCase();
		switch (month) {
		case "jan":
			result += "Jan " + year + " has 31 days";
			break;
		case "feb":
			if (isLeapYear) {
				result += "Feb " + year + " has 29 days";
			} else {
				result += "Feb " + year + " has 28 days";
			}
			break;
		case "mar":
			result += "Mar " + year + " has 31 days";
			break;
		case "apr":
			result += "Apr " + year + " has 30 days";
			break;
		case "may":
			result += "May " + year + " has 31 days";
			break;
		case "jun":
			result += "Jun " + year + " has 30 days";
			break;
		case "jul":
			result += "Jul " + year + " has 31 days";
			break;
		case "aug":
			result += "Aug " + year + " has 31 days";
			break;
		case "sep":
			result += "Sep " + year + " has 30 days";
			break;
		case "oct":
			result += "Oct " + year + " has 31 days";
			break;
		case "nov":
			result += "Nov " + year + " has 30 days";
			break;
		case "dec":
			result += "Dec " + year + " has 31 days";
			break;
		default:
			result = "Invalid input";
		}

		// Display
		System.out.println(result);
	}
}
