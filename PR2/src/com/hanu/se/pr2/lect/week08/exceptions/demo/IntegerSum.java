package com.hanu.se.pr2.lect.week08.exceptions.demo;

@SuppressWarnings("serial")
class EmptyLineException extends RuntimeException {
	public EmptyLineException(String message) {
		super("EmptyLineException: " + message);
	}
}

public class IntegerSum {
	private String numberSeries;

	public IntegerSum(String numberSeries) throws InvalidInputException, EmptyLineException {
		if (!isValidNumberSeriesLength(numberSeries)) {
			throw new EmptyLineException("The series should not be empty!");
		}
		if (!isValidNumberSeries(numberSeries)) {
			throw new InvalidInputException("The series should contain integers [-2147483648 2147483647] only!");
		}
		this.numberSeries = numberSeries.trim();
	}

	public String getNumberSeries() {
		return this.numberSeries;
	}

	public void setNumberSeries(String numberSeries) throws InvalidInputException, EmptyLineException {
		if (!isValidNumberSeriesLength(numberSeries)) {
			throw new EmptyLineException("The series should not be empty!");
		}
		if (!isValidNumberSeries(numberSeries)) {
			throw new InvalidInputException("The series should contain integers [-2147483648 2147483647] only!");
		}
		this.numberSeries = numberSeries.trim();
	}

	private boolean isValidNumberSeries(String numberSeries) {
		String[] numbers = numberSeries.trim().split("\\s+"); // Split by spaces

		for (String num : numbers) {
			try {
				Integer.parseInt(num); // Try parsing each part as an integer
				if(Integer.parseInt(num) == 0) {
					break;
				}
			} catch (NumberFormatException e) {
				return false; // If parsing fails, the input is not a valid number series
			}
		}
		return true; // All values are valid integers
	}

	private boolean isValidNumberSeriesLength(String numberSeries) {
		if (numberSeries == null || numberSeries.trim().isEmpty()) {
			return false;
		}
		return true;
	}

	public int getTotal() {
		String[] numbers = this.getNumberSeries().trim().split("\\s+"); // Split by spaces
		int sum = 0;
		boolean hasValidNumber = false;
		for (String num : numbers) {
			int value = Integer.parseInt(num); // May throw NumberFormatException
			if (value == 0) {
				break; // Stop summing when 0 is encountered
			}
			sum += value;
		}
		return sum;
	}

}
