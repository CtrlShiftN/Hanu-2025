package com.hanu.se.pr2.lect.week03.simpleOOP.demo;

public class MinWorkTime2 {

	public static void main(String[] args) {
		// Read file
		// 3
		// 6 5
		// 4 2
		// 6 6
		int n = 3;
		int[][] times = { { 6, 5 }, { 4, 2 }, { 6, 6 } }; // 5
		int minTime = Integer.MAX_VALUE; // >2B
		for (int i = 0; i < times.length; i++) { // i => A
			for (int j = 0; j < times[i].length; j++) { // j => B
				if (i == j) {
					// same person
					minTime = Math.min(minTime, times[i][0] + times[i][1]);
				} else {
					// diff 
					minTime = Math.min(minTime, Math.max(times[i][0], times[j][1]));
				}
			}
		}
		System.out.println(minTime);

	}

}
