package week02.variable.formatting;

public class PowTable {
	public static void main(String[] args) {
		System.out.printf("%-6s%-6s%-6s\n", "a", "b", "pow(a, b)");
		System.out.printf("%-6d%-6d%-6d\n", 1, 2, (int)Math.pow(1, 2));
		System.out.printf("%-6d%-6d%-6d\n", 2, 3, (int)Math.pow(2, 3));
		System.out.printf("%-6d%-6d%-6d\n", 3, 4, (int)Math.pow(3, 4));
	}
}
