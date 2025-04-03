package com.hanu.se.pr2.lect.week11.generic.demo;

import java.util.ArrayList;

public class ArrayListOperations {
	public ArrayList<Object> store;

	public ArrayListOperations() {
		this.store = new ArrayList<Object>();
	}

	public ArrayList<Object> getArrayList() {
		return this.store;
	}

	public void addInteger(int number) {
		this.store.add(number);
	}

	public void addDouble(double number) {
		this.store.add(number);
	}

	public void addBoolean(boolean bool) {
		this.store.add(bool);
	}

	public void addString(String str) throws NotPossibleException {
		if (!isValidString(str)) {
			throw new NotPossibleException("Invalid string");
		}
		this.store.add(str.trim());
	}

	private boolean isValidString(String str) {
		return str != null && str.trim() != " " && str.trim().length() >= 1;
	}

	public String toString() {
		String result = "";
		for (Object object : store) {
			result += object + " ";
		}
		return result;
	}
}
