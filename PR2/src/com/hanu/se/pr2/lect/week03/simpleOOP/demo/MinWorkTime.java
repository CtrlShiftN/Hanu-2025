package com.hanu.se.pr2.lect.week03.simpleOOP.demo;

import java.io.*;
import java.util.*;

public class MinWorkTime {
	public static void main(String[] args) throws IOException {
		// Read input from the file
//        BufferedReader br = new BufferedReader(new FileReader("data.txt"));
//        int n = Integer.parseInt(br.readLine()); // Number of employees
		int n = 3;
		int[][] times = { { 6, 5 }, { 2, 2 }, { 6, 6 } }; // Array to store Ai and Bi
//        for (int i = 0; i < n; i++) {
//            String[] line = br.readLine().split(" ");
//            times[i][0] = Integer.parseInt(line[0]); // Ai
//            times[i][1] = Integer.parseInt(line[1]); // Bi
//        }

//		br.close();

		// Minimum time to complete both works
		int minTime = Integer.MAX_VALUE;

		// Try all combinations of employees
		for (int i = 0; i < n; i++) { // Employee for Work A
			for (int j = 0; j < n; j++) { // Employee for Work B
				if (i == j) {
					// Both tasks assigned to the same employee
					minTime = Math.min(minTime, times[i][0] + times[i][1]);
				} else {
					// Tasks assigned to different employees
					minTime = Math.min(minTime, Math.max(times[i][0], times[j][1]));
				}
			}
		}

		// Print the minimum time required
		System.out.println(minTime);
		try {
			System.out.println(calculateMinWorkTime("./demo/minWorker.txt"));
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
	}

	public static int calculateMinWorkTime(String filePath) throws IOException {
		// Read the input file
		BufferedReader br = new BufferedReader(new FileReader(filePath));

		// Read the number of employees
		int n = Integer.parseInt(br.readLine().trim());

		// Array to store times (Ai and Bi) for each employee
		int[][] times = new int[n][2];
		for (int i = 0; i < n; i++) {
			String[] line = br.readLine().split(" ");
			times[i][0] = Integer.parseInt(line[0]); // Ai
			times[i][1] = Integer.parseInt(line[1]); // Bi
		}
		br.close();

		// Initialize the minimum time to a large value
		int minTime = Integer.MAX_VALUE;

		// Iterate over all pairs of employees
		for (int i = 0; i < n; i++) {
			for (int j = 0; j < n; j++) {
				if (i == j) {
					// Both tasks assigned to the same employee
					minTime = Math.min(minTime, times[i][0] + times[i][1]);
				} else {
					// Tasks assigned to different employees
					minTime = Math.min(minTime, Math.max(times[i][0], times[j][1]));
				}
			}
		}

		return minTime; // Return the minimum time required
	}
}
