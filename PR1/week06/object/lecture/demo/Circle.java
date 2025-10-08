package week06.object.lecture.demo;

public class Circle {
	private Point position;
	private double radius;

	public Circle() {
		position = new Point(); // Comment this to see the difference
	}

	public Circle(Point position) {
		this.position = position;
	}

	public Circle(double radius) {
		this.position = new Point();
		this.radius = radius;
	}

	public Circle(Point position, double radius) {
		this.position = position;
		this.radius = radius;
	}

	public Point getPosition() {
		return this.position;
	}

	public void setPosition(Point position) {
		this.position = position;
	}

	public double getRadius() {
		return this.radius;
	}

	public void setRadius(double radius) {
		this.radius = radius;
	}

	public double getArea() {
		return Math.PI * Math.pow(this.radius, 2);
	}

	@Override
	public String toString() {
		return "Circle [position=" + this.getPosition().toString() + ", radius=" + this.getRadius() + "]";
	}

}
