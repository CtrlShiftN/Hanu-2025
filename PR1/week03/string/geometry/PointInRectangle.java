package week03.string.geometry;

import java.util.*;

public class PointInRectangle {
	public static void main(String[] args) {
		// Declaration
		Scanner sc = new Scanner(System.in);
		double rectanglePositionX = 0.0, rectanglePositionY = 0.0, rectangleWidth = 10, rectangleHeight = 5;
		double pointPositionX, pointPositionY;

		// Prompt user
		System.out.println("Enter a point with two coordinates: ");
		pointPositionX = sc.nextDouble();
		pointPositionY = sc.nextDouble();

		// Process
		// Inside 1/4
		boolean isInsidePartOne = (pointPositionX >= 0 - rectangleWidth / 2) && (pointPositionY <= rectangleHeight / 2);
		
		System.out.println("One " + isInsidePartOne);
		// Inside 2/4
		boolean isInsidePartTwo = (pointPositionX <= rectangleWidth / 2) && (pointPositionY <= rectangleHeight / 2);
		System.out.println("Two " + isInsidePartTwo);

		// Inside 3/4
		boolean isInsidePartThree = (pointPositionX <= rectangleWidth / 2)
				&& (pointPositionY >= 0 - rectangleHeight / 2);
		System.out.println("Three " + isInsidePartThree);

		// Inside 4/4
		boolean isInsidePartFour = (pointPositionX >= 0 - rectangleWidth / 2)
				&& (pointPositionY >= 0 - rectangleHeight / 2);
		System.out.println("Four " + isInsidePartFour);

		// Display
		if (isInsidePartOne && isInsidePartTwo && isInsidePartThree && isInsidePartFour) {
			System.out.println("Point (" + pointPositionX + ", " + pointPositionY + ") is in the rectangle");
		} else {
			System.out.println("Point (" + pointPositionX + ", " + pointPositionY + ") is not in the rectangle");
		}
	}
}
