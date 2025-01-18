package com.hanu.se.pr2.lect.week02.demo;

import java.util.*;

public class DistinctNumber {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		System.out.println("Enter ten numbers:");
		HashSet<Integer> distinctNumber = new HashSet<Integer>();
		for (int i = 0; i < 10; i++) {
			distinctNumber.add(sc.nextInt());
		}
		System.out.println(distinctNumber);
	}
}
