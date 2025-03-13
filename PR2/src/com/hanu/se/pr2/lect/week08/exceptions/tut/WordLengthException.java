package com.hanu.se.pr2.lect.week08.exceptions.tut;

public class WordLengthException extends Exception {
	public WordLengthException(String message) {
		super("WordLengthException: " + message);
	}
}
