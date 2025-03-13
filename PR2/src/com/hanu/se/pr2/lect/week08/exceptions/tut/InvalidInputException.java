package com.hanu.se.pr2.lect.week08.exceptions.tut;

public class InvalidInputException extends Exception {
	public InvalidInputException(String message) {
		super("InvalidInputException: " + message);
	}
}
