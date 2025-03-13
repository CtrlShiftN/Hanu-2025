package com.hanu.se.pr2.lect.week08.exceptions.tut;

public class EmptyLineException extends Exception {
	public EmptyLineException(String message) {
		super("EmptyLineException: " + message);
	}
}
