package com.hanu.se.pr2.lect.week09.io.demo;

import java.io.File;
import java.nio.file.Files;
import java.nio.file.attribute.PosixFilePermission;
import java.nio.file.attribute.PosixFilePermissions;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Set;

public class XFileExtenedTest {

	public static void main(String[] args) {
		// test students
		try {
			Student st1 = new Student("Nam@", "CNTT", 8.0);
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}

		try {
			Student st2 = new Student("Hung", "PSD2", 6.3);
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}

		try {
			Student st3 = new Student("Nhu", "CNTT", -4.4);
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}

		try {
			Student st4 = new Student("Nhung", "ESPD", 24.4);
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}

		try {
			Student st5 = new Student("", "ESPD", 6.8);
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}

		try {
			Student st6 = new Student("Loi", "", 7.4);
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}

		try {
			Student st7 = new Student("Yen Nhi", "ESPD", 7.4);
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}

		// Add students to list
		List<Student> studentList = new ArrayList<Student>();
		try {
			studentList.add(new Student("Tuan", "CNTT"));
			studentList.add(new Student("Long", "MME", 9.0));
			studentList.add(new Student("DangBinh", "ESPD", 6.9));
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
		// Write obj to file
		try {
			File f = new File("./src/demo");
			if (!f.exists()) {
				f.mkdir();
				Set<PosixFilePermission> perms = PosixFilePermissions.fromString("rwxrwxrwx");
				Files.setPosixFilePermissions(f.toPath(), perms);
			}
			XFileExtended.writeObject(f.getPath() + "/students.dat", studentList);
			System.out.println("End write file!");
		} catch (Exception e2) {
			System.out.println(e2.getMessage());
		}
		// read object
		try {
			Object obj = XFileExtended.readObject("./src/demo/students.dat");
			if (obj instanceof List) {
				@SuppressWarnings("unchecked")
				List<Student> studentObjs = (List<Student>) obj;
				System.out.println("Students read from file:");
				for (Student s : studentObjs) {
					System.out.println(s);
				}
			}
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
	}

}
