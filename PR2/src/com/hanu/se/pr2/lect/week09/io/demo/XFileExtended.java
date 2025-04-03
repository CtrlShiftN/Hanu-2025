package com.hanu.se.pr2.lect.week09.io.demo;

import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;

public class XFileExtended {
	public static Object readObject(String path) throws NotPossibleException {
		try {
			ObjectInputStream ois = new ObjectInputStream(new FileInputStream(path));
			Object obj = ois.readObject();
			ois.close();
			return obj;
		} catch (Exception e) {
			throw new NotPossibleException("Read Object Error - " + e.getMessage());
		}
	}

	public static void writeObject(String path, Object obj) throws NotPossibleException {
		try {
			ObjectOutputStream oos = new ObjectOutputStream(new FileOutputStream(path));
			oos.writeObject(obj);
			oos.close();
		} catch (Exception e) {
			throw new NotPossibleException("Write Object Error - " + e.getMessage());
		}
	}
}
