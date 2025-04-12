package com.hanu.se.pr2.lect.week07.collections.demo;

@SuppressWarnings("serial")
public class NotPossibleException extends Exception {
	public NotPossibleException(String message) {
		super("NotPossibleException: " + message);
	}
}
