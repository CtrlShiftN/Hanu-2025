package week02.variable.math;

import java.util.*;

public class RunwayLength {
	public static void main(String[] args) {
		// Declaration
		Scanner sc = new Scanner(System.in);
		double speed, acceleration, runwayLength;
		
		// Prompt user to input s.th
		System.out.println("Enter speed and acceleration: ");
		speed = sc.nextDouble();
		acceleration = sc.nextDouble();
		
		// Compute || Process
		runwayLength = Math.pow(speed, 2) / (2 * acceleration);
		
		// Display or return
		System.out.printf("Runway length: %.3f", runwayLength);
	}
}
