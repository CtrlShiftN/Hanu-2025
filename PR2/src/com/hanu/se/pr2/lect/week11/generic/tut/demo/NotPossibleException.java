package com.hanu.se.pr2.lect.week11.generic.tut.demo;

@SuppressWarnings("serial")
public class NotPossibleException extends Exception {
	public NotPossibleException(String message) {
		super("NotPossibleException: " + message);
	}
}
