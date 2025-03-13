package com.hanu.se.pr2.lect.week07.collections.demo;

import java.util.Comparator;

public class SortPersonByNameDesc implements Comparator<Person> {

	@Override
	public int compare(Person o1, Person o2) {
		return o2.getName().compareTo(o1.getName());
	}

}
