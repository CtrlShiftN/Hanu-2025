package com.hanu.se.pr2.lect.week11.generic.demo;

public class ArrayListOperationsTest {

	public static void main(String[] args) {
		try {
			ArrayListOperations arrOps = new ArrayListOperations();
			arrOps.addInteger(3);
			arrOps.addDouble(3.14);
			arrOps.addBoolean(false);
			arrOps.addString(" This is a string ");
			System.out.println(arrOps.toString());
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
	}

}
