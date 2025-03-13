package com.hanu.se.pr2.lect.week07.collections.demo;

import java.util.Comparator;

public class SortPersonByAgeAsc implements Comparator<Person> {

	@Override
	public int compare(Person o1, Person o2) {
		int[] personBirthday1 = castStringArrayToIntArray(parseDateToArray(o1.getDateOfBirth()));
		int[] personBirthday2 = castStringArrayToIntArray(parseDateToArray(o2.getDateOfBirth()));
		int yearCompare = personBirthday1[2] - personBirthday2[2];
		int monthCompare = personBirthday1[1] - personBirthday2[1];
		int dateCompare = personBirthday1[0] - personBirthday2[0];
		
		if (yearCompare == 0) {
			if (monthCompare == 0) {
				return dateCompare;
			}else {
				return monthCompare;
			}
		}else {
			return yearCompare;
		}
	}

	public String[] parseDateToArray(String date) {
		if (date.contains(".")) {
			return date.split(".");
		} else if (date.contains("/")) {
			return date.split("/");
		} else if (date.contains("-")) {
			return date.split("-");
		}
		return null;
	}
	
	public int[] castStringArrayToIntArray(String[] strArr) {
		int[] intArr = new int[strArr.length];
		for (int i = 0; i < strArr.length; i++) {
			intArr[i] = Integer.parseInt(strArr[i]);
		}
		return intArr;
	}

}
