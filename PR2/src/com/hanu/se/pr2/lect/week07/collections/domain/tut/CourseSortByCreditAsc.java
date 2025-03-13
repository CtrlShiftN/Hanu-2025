package com.hanu.se.pr2.lect.week07.collections.domain.tut;

import java.util.Comparator;

public class CourseSortByCreditAsc implements Comparator<Course> {

	@Override
	public int compare(Course o1, Course o2) {
		return o1.getCredits() - o2.getCredits();
	}

}
