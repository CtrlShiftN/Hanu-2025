package week10.textio.tutorial;

import java.io.*;
import java.util.*;

public class ListingContent {

	public static void main(String[] args) {
		try {
			File mary = new File("src/week10/textio/mary.txt");
			File mary2 = new File("src/week10/textio/mary2.txt");
			Scanner sc = new Scanner(mary);
			if (!mary2.exists()) {
				mary2.createNewFile();
			}
			PrintWriter pw = new PrintWriter(mary2);
			// processing
			int count = 0;
			while (sc.hasNext()) {
				String line = sc.nextLine();
				count++;
				pw.println(count + ". " + line);
			}
			sc.close();
			pw.close();
		} catch (IOException e) {
			System.err.println(e.getMessage());
		}
	}

}
