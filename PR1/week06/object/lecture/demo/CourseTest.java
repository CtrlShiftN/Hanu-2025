package week06.object.lecture.demo;

public class CourseTest {

	public static void main(String[] args) {
		// instance of Course
		Course pr1 = new Course();
		System.out.println(pr1.toString());
		pr1.setName("Programming 01");
		System.out.println(pr1.toString());

		Course pr2 = new Course("66FIT2PR2", "Programming 02");
		System.out.println(pr2.toString());

		pr2.sayHello(); // non static method
		Course.greeting("Nam"); // static method

	}

}
