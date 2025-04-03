package com.hanu.se.pr2.lect.week11.generic.tut.demo;

import java.util.ArrayList;
import java.util.List;

public class ArrayListOperations {
	private List store = new ArrayList();

	public ArrayListOperations() {

	}

	public void addInteger(int num) {
		this.store.add(num);
	}

	public void addDouble(double num) {
		this.store.add(num);
	}

	public void addBoolean(boolean bool) {
		this.store.add(bool);
	}

	public void addString(String str) throws NotPossibleException {
		if (!isValidString(str)) {
			throw new NotPossibleException("addString method - Empty string!");
		}
		this.store.add(str.trim());
	}

	private boolean isValidString(String str) {
		return str != null && str.trim() != " " && str.trim().length() >= 1;
	}

	public String toString() {
		// TODO: implement this
		return this.store.toString();
	}
}
