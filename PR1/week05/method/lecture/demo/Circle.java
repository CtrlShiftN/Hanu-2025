package week05.method.lecture.demo;

public class Circle {

	// Non-returning value method with no parameter
	public static void sayHello() {
		System.out.println("Hello! I am a circle");
	}

	// Non-returning value method with parameters
	public static void sayHi(String userName) {
		System.out.println("Hello, " + userName);
	}

	// Returning value method with no parameter
	public static String getClassName() {
		return "Circle";
	}

	// Returning value method with parameter
	public static double getArea(double radius) {
		double area = Math.PI * radius * radius;
		return area;
	}

}
