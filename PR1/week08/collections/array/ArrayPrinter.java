package week08.collections.array;

public class ArrayPrinter {
	public static void main(String[] args) {
		int[][] table = { { 8, 1, 6 }, { 3, 5, 7 }, { 4, 9, 2 } };
		/*
		 * +-----------+ 
		 * | 8 | 1 | 6 | 
		 * +-----------+ 
		 * | 3 | 5 | 7 | 
		 * +-----------+ 
		 * | 4 | 9 | 2 | 
		 * +-----------+
		 */
		System.out.println("+-----------+");
		for (int row = 0; row < table.length; row++) {
			for (int col = 0; col < table.length; col++) {
				System.out.print("| ");
				System.out.print(table[row][col] + " ");
			}
			System.out.println("|");
			System.out.println("+-----------+");
		}
	}
}
