package week05.method.calender;

public class LeapYear {

	public static void main(String[] args) {
		int count = 0;
		final int limitPerLine = 10;

		System.out.println("All the leap years from 101 to 2100: ");
		for (int i = 101; i <= 2100; i++) {
			if (isLeapYear(i)) {
				count++;
				if (count % 10 == 0) {
					System.out.print(i + "\n");
				} else {
					System.out.print(i + " ");
				}
			}
		}
		System.out.println("\nTotal number of leap years in this period: " + count);
	}

	public static boolean isLeapYear(int year) {
		if (year % 4 == 0 && year % 100 != 0) {
			return true;
		} else if (year % 400 == 0) {
			return true;
		} else {
			return false;
		}
	}

}
