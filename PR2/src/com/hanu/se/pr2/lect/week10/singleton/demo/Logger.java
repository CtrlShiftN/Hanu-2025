package com.hanu.se.pr2.lect.week10.singleton.demo;

public class Logger {
	private static Logger instance;

	// Private constructor to prevent instantiation
	private Logger() {
	}

	// Public method to get the single instance
	public static Logger getInstance() {
		if (instance == null) {
			instance = new Logger();
		}
		return instance;
	}

	// Logging methods
	public void info(String message) {
		this.log("INFO", message);
	}

	public void warning(String message) {
		this.log("WARNING", message);
	}

	public void error(String message) {
		this.log("ERROR", message);
	}

	private void log(String level, String message) {
		System.out.println("[" + level + "] " + message);
	}
}
