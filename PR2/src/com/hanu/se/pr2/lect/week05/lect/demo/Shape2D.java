package com.hanu.se.pr2.lect.week05.lect.demo;

public abstract class Shape2D implements Shape2DCalculation {
	private Colors color = Colors.WHITE;
    private boolean filled = false;
    private Point2D position = new Point2D();

    public Shape2D() {
        
    }

    public Shape2D(Point2D position) {
        this.position = position;
    }

    public Shape2D(Colors color, boolean filled) {
        this.color = color;
        this.filled = filled;
    }

    public Shape2D(Colors color, boolean filled, Point2D position) {
        this.color = color;
        this.filled = filled;
        this.position = position;
    }

    public Colors getColor() {
        return color;
    }

    public void setColor(Colors color) {
        this.color = color;
    }

    public boolean isFilled() {
        return filled;
    }

    public void setFilled(boolean filled) {
        this.filled = filled;
    }

    public Point2D getPosition() {
        return position;
    }

    public void setPosition(Point2D position) {
        this.position = position;
    }

    @Override
    public String toString() {
    	return "Shape2D[color=" + this.getColor() + ",filled status=" + this.isFilled() + ",position="
				+ this.getPosition().toString() + "]";
    }
}
