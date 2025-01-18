package com.hanu.se.pr2.lect.review.demo;

public class InvalidRowException extends Exception {
	public InvalidRowException(String message) {
		super("Invalid number of rows: " + message);
	}
}
