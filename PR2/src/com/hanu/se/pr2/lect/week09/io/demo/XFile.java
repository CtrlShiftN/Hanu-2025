package com.hanu.se.pr2.lect.week09.io.demo;

import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;

public class XFile {
	/**
	 * Read binary file
	 * 
	 * @param path the path of the file to read
	 * @return the read data as a byte array
	 * @throws IOException if an error occurs while reading the file
	 */
	public static byte[] read(String path) throws IOException {
		try (FileInputStream fis = new FileInputStream(path)) {
			int n = fis.available();
			byte[] data = new byte[n];
			fis.read(data);
			return data;
		}
	}

	/**
	 * Write binary file
	 * 
	 * @param path the path of the file to write
	 * @param data the data to write to the file
	 * @throws IOException if an error occurs while writing the file
	 */
	public static void write(String path, byte[] data) throws IOException {
		try (FileOutputStream fos = new FileOutputStream(path)) {
			fos.write(data);
		}
	}
}
