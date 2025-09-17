package week03.string.equation;

import java.util.*;

/*
 *  Solve equation: a.x^2 + b.x + c = 0
 */
public class QuadraticEquationSolver {
	public static void main(String[] args) {
		// Declaration
		Scanner sc = new Scanner(System.in);
		double a, b, c, delta;
		String result;

		// Prompt user to input s.th
		System.out.println("Enter a, b, c: ");
		a = sc.nextDouble();
		b = sc.nextDouble();
		c = sc.nextDouble();

		// Process
		if (a == 0) {
			// b.x + c = 0
			if (b == 0) {
				// 0x^2 + 0.x + 0 = 0
				if (c == 0) {
					result = "The equation has an infinite number of solutions";
				} else {
					result = "The equation has no real roots";
				}
			} else {
				if (c == 0) {
					// b.x = 0 (b != 0)
					result = "The equation has one root 0";
				} else {
					// b.x + c = 0 (b != 0, c != 0)
					result = "The equation has one root " + (-c / b);
				}
			}
		} else {
			if (b == 0) {
				// ax^2 + c = 0
				if (c == 0) {
					// a.x^2 = 0 (a != 0)
					result = "The equation has one root 0";
				} else {
					// a.x^2 + c = 0 (a != 0, c != 0)
					if (-c / a > 0) {
						result = "The equation has two roots " + (Math.sqrt(-c / a) + " and -" + (Math.sqrt(-c / a)));
					} else {
						result = "The equation has no real roots";
					}
				}
			} else {
				if (c == 0) {
					// ax^2 + b.x = 0 (a,b != 0)
					// x(ax + b) = 0
					result = "The equation has two roots 0 and " + (-b / a);
				} else {
					// ax^2 + b.x + c = 0 (a,b,c != 0)
					if (a + b + c == 0.0) {
						result = "The equation has two roots 1 and " + (c / a);
					}
					if (a - b + c == 0.0) {
						result = "The equation has two roots -1 and " + (-c / a);
					}
					if (a + c == b) {
						result = "The equation has two roots -1 and " + (-c / a);
					}
					// TODO: Add more
					delta = Math.pow(b, 2) - 4 * a * c;
					if (delta < 0) {
						result = "The equation has no real roots";
					} else if (delta == 0) {
						result = "The equation has one root " + (-b / (2 * a));
					} else {
						result = "The equation has two roots " + (-b + Math.sqrt(delta)) / (2 * a) + " and "
								+ (-b - Math.sqrt(delta)) / (2 * a);
					}
				}
			}
		}

		// Display
		System.out.println(result);
	}
}
