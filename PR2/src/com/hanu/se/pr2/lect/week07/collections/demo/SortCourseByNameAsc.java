package com.hanu.se.pr2.lect.week07.collections.demo;

import java.util.Comparator;

public class SortCourseByNameAsc implements Comparator<Course> {
	@Override
	public int compare(Course c1, Course c2) {
		return c1.getName().compareToIgnoreCase(c2.getName());
	}
}

class SortCourseByCreditAsc implements Comparator<Course> {
	@Override
	public int compare(Course c1, Course c2) {
		return Integer.compare(c1.getCredits(), c2.getCredits());
	}
}

class SortCourseByDepartmentAsc implements Comparator<Course> {
	@Override
	public int compare(Course c1, Course c2) {
		return c1.getDepartment().toString().compareTo(c2.getDepartment().toString());
	}
}

class SortCourseBySemesterAsc implements Comparator<Course> {
	@Override
	public int compare(Course c1, Course c2) {
		return c1.getSemester().toString().compareTo(c2.getSemester().toString());
	}
}
