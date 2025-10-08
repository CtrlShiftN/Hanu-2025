package week07.exceptions.lecture.demo;

public class StringBuilderDemo {
	public static void main(String[] args) {
		StringBuilder sb = new StringBuilder("01234567");
		sb.reverse();
		System.out.println(sb);
		sb.deleteCharAt(5);
		System.out.println(sb);
	}
}
