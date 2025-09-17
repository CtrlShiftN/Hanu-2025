package week03.string.geometry;

import java.util.*;

public class PointInTriangle {
	public static void main(String[] args) {
		// Declaration
		Scanner sc = new Scanner(System.in);
		double positionAX = 0, positionAY = 100, positionBX = 200, positionBY = 0;
		double pointPositionX, pointPositionY;
		String result = "";

		// Prompt user
		System.out.println("Enter a point's x- and y-coordinates: ");
		pointPositionX = sc.nextDouble();
		pointPositionY = sc.nextDouble();

		// Process
		double intersectX = (-pointPositionX * (positionBX * positionAY))
				/ (-pointPositionY * positionBX - pointPositionX * positionAY);
		double intersectY = (-pointPositionY * (positionBX * positionAY))
				/ (-pointPositionY * positionBX - pointPositionX * positionAY);
		result = (pointPositionX > intersectX || pointPositionY > intersectY) ? "is not" : "is";

		// Display
		System.out.println("The point " + result + " in the triangle");
	}
}
