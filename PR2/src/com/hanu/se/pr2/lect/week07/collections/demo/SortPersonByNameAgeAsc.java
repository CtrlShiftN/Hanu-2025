package com.hanu.se.pr2.lect.week07.collections.demo;

import java.util.Comparator;

public class SortPersonByNameAgeAsc implements Comparator<Person> {

	@Override
	public int compare(Person o1, Person o2) {
		int[] personBirthday1 = castStringArrayToIntArray(parseDateToArray(o1.getDateOfBirth()));
		int[] personBirthday2 = castStringArrayToIntArray(parseDateToArray(o2.getDateOfBirth()));
		int yearCompare = personBirthday1[2] - personBirthday2[2];
		int monthCompare = personBirthday1[1] - personBirthday2[1];
		int dateCompare = personBirthday1[0] - personBirthday2[0];

		// Compare by Year first (older person comes first)
	    if (yearCompare != 0) {
	        return yearCompare;
	    }

	    // If year is the same, compare by Month
	    if (monthCompare != 0) {
	        return monthCompare;
	    }

	    // If month is the same, compare by Day
	    if (dateCompare != 0) {
	        return dateCompare;
	    }

	    // If date of birth is the same, compare by Name (ascending order)
	    return o1.getName().compareTo(o2.getName());
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
