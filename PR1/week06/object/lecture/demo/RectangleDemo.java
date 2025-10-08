package week06.object.lecture.demo;

public class RectangleDemo {
	public static void main(String[] args) {
		Rectangle rec1 = new Rectangle();
		System.out.println(rec1.toString());
		rec1.setWidth(5);
		System.out.println(rec1);
		System.out.println("Height: " + rec1.getHeight());

		Rectangle.sayHello();
	}
}
