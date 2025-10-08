package week05.method.lecture.demo;

public class Main {

	public static void main(String[] args) {

		// Non-returning value methods
		// Acts as a statement
		Circle.sayHello();
		Circle.sayHi("Nam");

		// Returning value methods
		// Treated as a value
		System.out.println(Circle.getClassName());
		System.out.println(Circle.getArea(1));
		double area = Circle.getArea(6);
		System.out.println("Area: " + area);
		
		System.out.println(Numbers.num(2));
	}

}
