package com.hanu.se.pr2.lect.week11.generic.tut.demo;

public class ArrayListIntegerLoopTest {

	public static void main(String[] args) {
		ArrayListIntegerLoop intArrList;
		try {
			intArrList = new ArrayListIntegerLoop(10);
			intArrList.getInteger();
			intArrList.printAllElement();
		} catch (NotPossibleException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

	}

}
