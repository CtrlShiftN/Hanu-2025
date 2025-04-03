package com.hanu.se.pr2.lect.week09.io.demo;

import java.io.IOException;

public class XFileTest {

	public static void main(String[] args) {
		try {
			// Read a binary file
			byte[] data = XFile.read("./src/images/Albert-Einstein-Quote-Everybody-is-a-genius-But-if-you-judge-a.jpg");
			System.out.println(data.length);
			// Write to another file
			XFile.write("./src/images/test.jpg", data);

			System.out.println("File copied successfully!");
		} catch (IOException e) {
			System.out.println("IO Error: " + e.getMessage());
		}
	}

}
