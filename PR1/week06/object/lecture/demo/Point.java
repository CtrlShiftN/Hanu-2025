package week06.object.lecture.demo;

public class Point {
	private double positionX;
	private double positionY;

	public Point() {
		this.positionX = 0.0;
		this.positionY = 0.0;
	}

	public Point(double positionX, double positionY) {
		this.positionX = positionX;
		this.positionY = positionY;
	}

	public double getPositionX() {
		return this.positionX;
	}

	public void setPositionX(double positionX) {
		this.positionX = positionX;
	}

	public double getPositionY() {
		return this.positionY;
	}

	public void setPositionY(double positionY) {
		this.positionY = positionY;
	}

	@Override
	public String toString() {
		return "Point [x=" + getPositionX() + ", y=" + getPositionY() + "]";
	}

}
