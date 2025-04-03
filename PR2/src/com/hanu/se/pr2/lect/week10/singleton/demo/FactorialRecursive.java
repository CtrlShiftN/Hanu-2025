package com.hanu.se.pr2.lect.week10.singleton.demo;

import java.util.ArrayList;
import java.util.List;

public class FactorialRecursive {
	private double value;
	private static List<FactorialRecursive> stateStruct = new ArrayList<>();

	private FactorialRecursive(int index) throws NotPossibleException {
		if (index <= 0) {
			throw new NotPossibleException("FactorialRecursive init: Invalid index");
		}
		this.value = calculateFactorial(index);
		this.stateStruct.add(this);
	}

	private double calculateFactorial(int index) throws NotPossibleException {
		try {
			if (index == 1) {
				return 1;
			}
			return index * get(index - 1).value;
		} catch (Exception e) {
			throw new NotPossibleException("FactorialRecursive calculate factorial failed");
		}
	}

	public static FactorialRecursive get(int index) throws NotPossibleException {
		try {
			FactorialRecursive fr = lookup(index);
			if (fr == null) {
				fr = new FactorialRecursive(index);
			}
			return fr;
		} catch (Exception e) {
			throw new NotPossibleException("FactorialRecursive get: " + e.getMessage());
		}
	}

	private static FactorialRecursive lookup(int index) {
		FactorialRecursive fr = null;
		if (stateStruct.size() >= index) {
			fr = stateStruct.get(index - 1);
			return fr;
		} else {
			return null;
		}
	}

	public double getValue() {
		return this.value;
	}

	@Override
	public String toString() {
		return "FactorialRecursive [value=" + this.getValue() + "]";
	}

}
