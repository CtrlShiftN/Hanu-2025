package week05.method.lecture.demo;

public class Numbers {
	public static int num(int n) {
		// base case
		if (n == 1) {
			return 1;
		}
		// recursive call
		else {
			return 2 * num(n - 1);
		}
	}

	public static int sum(int n) {
		// base case
		if (n == 1)
			return 1;
		// recursive call
		else {
			return sum(n - 1) + num(n);
		}
	}

	public static void main(String[] args) {
//		System.out.println(num(6));
//		System.out.println(Math.pow(2, 3));
//
//		for (int i = 1; i <= 10; i++) {
//			System.out.print(num(i) + ", ");
//		}
//		System.out.println();
		System.out.println(sum(7));

		for (int i = 1; i <= 10; i++) {
			if (i == 10) {
				System.out.print(sum(i));
			} else {
				System.out.print(sum(i) + ", ");
			}
		}
	}
}
