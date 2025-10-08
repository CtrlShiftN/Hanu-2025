package week06.object.lecture.demo;

public class Rectangle {
	// fields || attributes: width, height
	private double width;
	private double height;

	// constructors
	public Rectangle() {
		this.width = 1.0;
		this.height = 2.0;
	}

	public Rectangle(double width, double height) {
		this.width = width;
		this.height = height;
	}

	// getters
	public double getWidth() {
		return this.width;
	}

	public double getHeight() {
		return this.height;
	}

	// setters (Note: if a field is immutable, should not define setter for that
	// field, Eg. ID, birthday,... )
	public void setWidth(double width) {
		this.width = width;
	}

	public void setHeight(double height) {
		this.height = height;
	}

	// validators (PR2)
	// other methods (other behaviors)
	public double getPerimeter() {
		return (this.width + this.height) * 2;
	}

	public double getArea() {
		return this.width * this.height;
	}
	public static void sayHello() {
		System.out.println("Hello, I am a rectangle! ");
	}

	// comparators (PR2)
	// toString (return a String containing all attrs)
	public String toString() {
		return "Rectangle[width=" + this.getWidth() + ", height=" + this.getHeight() + ", area=" + this.getArea() + "]";
	}
}
