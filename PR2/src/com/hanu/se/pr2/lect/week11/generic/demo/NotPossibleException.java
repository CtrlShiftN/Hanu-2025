package com.hanu.se.pr2.lect.week11.generic.demo;

public class NotPossibleException extends RuntimeException {
	public NotPossibleException(String message) {
		super("NotPossibleException: " + message);
	}
}
