package week10.textio.tutorial;

import java.io.*;
import java.util.*;

public class BasicFileIO {
	public static void main(String[] args) {
		File f = new File("src/week10/textio/hello.txt");
		// Storing data
		try {
			PrintWriter pw = new PrintWriter(f);
			pw.println("Hello, World!");
			pw.close();
		} catch (IOException e) {
			System.err.println(e.getMessage());
		}
		// Reading data
		try {
			Scanner sc = new Scanner(f);
			while (sc.hasNext()) {
				String line = sc.nextLine();
				System.out.println(line);
			}
			sc.close();
		} catch (IOException e) {
			System.err.println(e.getMessage());
		}
	}
}
