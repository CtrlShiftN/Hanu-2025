package com.hanu.se.pr2.lect.week07.collections.domain.tut;

import java.util.Comparator;

public class CourseSortByNameAsc implements Comparator<Course> {

	@Override
	public int compare(Course o1, Course o2) {
		return o1.getName().compareTo(o2.getName());
	}

}
