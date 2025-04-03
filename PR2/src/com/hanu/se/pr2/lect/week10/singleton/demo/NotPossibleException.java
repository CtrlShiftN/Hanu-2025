package com.hanu.se.pr2.lect.week10.singleton.demo;

public class NotPossibleException extends Exception {
	public NotPossibleException(String message) {
		super("NotPossibleException: " + message);
	}
}
