package week03.string.geometry;

import java.util.*;

public class PointInCircle {
	public static void main(String[] args) {
		// Declaration
		Scanner sc = new Scanner(System.in);
		double positionX, positionY, distance;
		double circlePositionX = 0.0, circlePositionY = 0.0, radius = 10.0;

		// Prompt user to input s.th
		System.out.println("Enter a point with two coordinates: ");
		positionX = sc.nextDouble();
		positionY = sc.nextDouble();

		// Process
		distance = Math.pow(positionX - circlePositionX, 2) + Math.pow(positionY - circlePositionY, 2);
		distance = Math.sqrt(distance);

		// Display
		if (distance <= radius) {
			System.out.println("Point (" + positionX + ", " + positionY + ") is in the circle");
		} else {
			System.out.println("Point (" + positionX + ", " + positionY + ") is not in the circle");
		}
	}
}
