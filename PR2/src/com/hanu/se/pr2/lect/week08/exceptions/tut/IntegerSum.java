package com.hanu.se.pr2.lect.week08.exceptions.tut;

public class IntegerSum {
	private String input;

	public IntegerSum(String input) throws EmptyLineException, InvalidInputException {
		if (isEmpty(input)) {
			throw new EmptyLineException("Empty line");
		}
		if (!isValidInput(input)) {
			throw new InvalidInputException("Invalid input");
		}
		this.input = input;
	}

	public String getInput() {
		return this.input;
	}

	public void setInput(String input) throws EmptyLineException, InvalidInputException {
		if (isEmpty(input)) {
			throw new EmptyLineException("Empty line");
		}
		if (!isValidInput(input)) {
			throw new InvalidInputException("Invalid input");
		}
		this.input = input;
	}

	private boolean isEmpty(String input) {
		return input == null || input.trim() == " ";
	}

	private boolean isValidInput(String input) {
		String[] series = input.split(" ");
		boolean isValid = true;
		for (String string : series) {
			try {
				int num = Integer.parseInt(string);
				if (num == 0) {
					break;
				}
			} catch (Exception e) {
				isValid = false;
				break;
			}
		}
		return isValid;
	}
	
	public int getTotal() {
		String[] series = input.split(" ");
		int sum = 0;
		for (String string : series) {
			try {
				int num = Integer.parseInt(string);
				if (num == 0) {
					break;
				}else {
					sum += num;
				}
			} catch (Exception e) {
				
				break;
			}
		}
		return sum;
	}

}
