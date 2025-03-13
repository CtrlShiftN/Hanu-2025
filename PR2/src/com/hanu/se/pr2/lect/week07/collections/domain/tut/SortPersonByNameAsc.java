package com.hanu.se.pr2.lect.week07.collections.domain.tut;

import java.util.Comparator;

public class SortPersonByNameAsc implements Comparator<Person> {

	@Override
	public int compare(Person o1, Person o2) {
		return o1.getName().compareTo(o2.getName());
	}

}
