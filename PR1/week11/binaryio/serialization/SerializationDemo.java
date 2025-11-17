package week11.binaryio.serialization;

import java.io.*;
import java.util.*;

public class SerializationDemo {

	public static void main(String[] args) {
		// Declaration
		List<String> demoList = new ArrayList<>();
		try {
			File f = new File("src/week11/binaryio/data.bin");
			// Ensure the file exists
			if (!f.exists()) {
				f.createNewFile();
			}
			// Adding items to the list
			demoList.add("First");
			demoList.add("Third");
			demoList.add("Second");
			// Serialize to a file
			FileOutputStream fos = new FileOutputStream(f);
			ObjectOutputStream oos = new ObjectOutputStream(fos);
			oos.writeObject(demoList);
			System.out.println("Serialization successed!");

			// De-serialize from a file
			FileInputStream fis = new FileInputStream(f);
			ObjectInputStream ois = new ObjectInputStream(fis);
			List<String> outputObject = (ArrayList) ois.readObject();
			System.out.println(outputObject.toString());

		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
	}
}
