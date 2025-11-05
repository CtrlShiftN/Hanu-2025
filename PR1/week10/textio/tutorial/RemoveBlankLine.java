package week10.textio.tutorial;

import java.io.*;
import java.util.*;

public class RemoveBlankLine {
	public static void main(String[] args) {
		File inputFile = new File("src/week10/textio/input.txt");
		File outputFile = new File("src/week10/textio/output.txt");
		try {
			Scanner sc = new Scanner(inputFile);
			PrintWriter pw = new PrintWriter(outputFile);
			if (!outputFile.exists()) {
				outputFile.createNewFile();
			}
			while (sc.hasNext()) {
				String line = sc.nextLine();
				if (line.length() >= 1) {
					pw.println(line);
				}
			}
			sc.close();
			pw.close();
			System.out.println("Removed blank lines from file!");
		} catch (IOException e) {
			System.err.println(e.getMessage());
		}
	}
}
