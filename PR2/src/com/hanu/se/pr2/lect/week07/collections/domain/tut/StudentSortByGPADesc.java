package com.hanu.se.pr2.lect.week07.collections.domain.tut;

import java.util.Comparator;

public class StudentSortByGPADesc implements Comparator<Student> {

	@Override
	public int compare(Student o1, Student o2) {
		return Double.compare(o2.getGpa(), o1.getGpa());
	}

}
