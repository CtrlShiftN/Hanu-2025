package com.hanu.se.pr2.lect.week09.io.demo;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileReader;
import java.io.FileWriter;

public class IOFileTest {

	public static void main(String[] args) {
		try {
			IOFile file = new IOFile("./src/demo/test.txt");
			file.write("\nHello, this is a test file.\nThis is the second line.");
			System.out.println("Number of lines: " + file.countLine());
			file.print();
			file.write("\nThis should be the third line.\nAnd the four line.");
			file.copy("./src/demo/test.txt");
			file.print();
//			file.delete();
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
	}

}
