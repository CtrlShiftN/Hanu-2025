package com.hanu.se.pr2.lect.week09.io.demo;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.PrintWriter;

public class IOFile {
	private String filePath;

	public IOFile(String filePath) throws NotPossibleException {
		if (!isExist(filePath)) {
			throw new NotPossibleException("File not found!");
		}
		this.filePath = filePath;
	}

	public String getFilePath() {
		return this.filePath;
	}

	public void setFilePath(String filePath) throws NotPossibleException {
		if (!isExist(filePath)) {
			throw new NotPossibleException("File not found!");
		}
		this.filePath = filePath;
	}

	public boolean isExist(String filePath) {
		File f = new File(filePath);
		return f.exists();
	}

	public int countLine() throws NotPossibleException {
		int line = 0;
		try {
			BufferedReader reader = new BufferedReader(new FileReader(this.getFilePath()));
			while (reader.readLine() != null) {
				line++;
			}
			reader.close();
			return line;
		} catch (Exception e) {
			throw new NotPossibleException(e.getMessage());
		}
	}

	public void write(String content) throws NotPossibleException {
		try {
			BufferedWriter writer = new BufferedWriter(new FileWriter(this.getFilePath(), true));
			writer.write(content);
			writer.close();
		} catch (Exception e) {
			throw new NotPossibleException(e.getMessage());
		}
	}

	public void print() throws NotPossibleException {
		try {
			BufferedReader reader = new BufferedReader(new FileReader(filePath));
			String line;
			while ((line = reader.readLine()) != null) {
				System.out.println(line);
			}
			reader.close();
		} catch (Exception e) {
			throw new NotPossibleException(e.getMessage());
		}
	}

	public void copy(String newFilePath) throws NotPossibleException {
		try {
			BufferedReader reader = new BufferedReader(new FileReader(this.getFilePath()));
			BufferedWriter writer = new BufferedWriter(new FileWriter(newFilePath, true));
			String line;
			while ((line = reader.readLine()) != null) {
				writer.write(line);
				writer.newLine();
			}
			reader.close();
			writer.close();
		} catch (Exception e) {
			throw new NotPossibleException(e.getMessage());
		}
	}

	public void delete() throws NotPossibleException {
		try {
			File f = new File(this.getFilePath());
			if (f.exists()) {
				if (f.delete()) {
					System.out.println("File deleted successfully.");
				} else {
					throw new NotPossibleException("Failed to delete the file.");
				}
			} else {
				throw new NotPossibleException("File not exist!");
			}
		} catch (Exception e) {
			throw new NotPossibleException(" (Delete operation) " + e.getMessage());
		}
	}

}
