package week07.exceptions.lecture.demo;

public class NegativeIntegerException extends Exception {
	public NegativeIntegerException(String message) {
		super("NegativeIntegerException: " + message);
	}
}
