package week06.object.lecture.demo;

public class MainTest {

	public static void main(String[] args) {
		// Instance of Student: Default
		Student lan = new Student();
		System.out.println(lan.toString());
		lan.sayHello();
		lan.setName("Lan");
		lan.sayHello();

		Student nam = new Student(2301040015L, "Nam");
		System.out.println(nam.toString());
		nam.sayHello();
		nam.speak("Hello world");

		Point p1 = new Point();
		System.out.println(p1.toString());

		Point p2 = new Point(1, 2);
		System.out.println(p2.toString());

		Circle c1 = new Circle();
		System.out.println(c1.toString());

		Circle c2 = new Circle(p2);
		System.out.println(c2.toString());
		System.out.println(c2.getArea());

		Circle c3 = new Circle(p2, 2);
		System.out.println(c3.toString());
		System.out.println(c3.getArea());
	}

}
