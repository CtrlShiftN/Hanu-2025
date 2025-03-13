package com.hanu.se.pr2.lect.week08.exceptions.tut;

public class MyException extends Exception {
	public MyException(String message) {
//		super("MyException: " + message);
		super(message);
	}

	@Override
	public String toString() {
		return "MyException: " + this.getMessage();
	}
}
