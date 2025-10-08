package week05.method.numbers;

public class Palindrome {
	public static void main(String[] args) {
		System.out.println(isPalindrome2(321)); // false
		System.out.println(isPalindrome2(121)); // true
		System.out.println(isPalindrome2(220)); // false
		System.out.println(isPalindrome2(123)); // false
		System.out.println(isPalindrome2(22)); // true
		System.out.println(isPalindrome2(3)); // true
		
		System.out.println(MyInteger.toBinary(75));
	}

	public static boolean isPalindrome(int number) {
		String num = number + "";
		String reversedNumber = "";
		for (int i = num.length() - 1; i >= 0; i--) {
			reversedNumber += num.charAt(i) + "";
		}
		return reversedNumber.equals(num);
	}

	public static boolean isPalindrome2(int number) {
		boolean result = true;
		String num = number + "";
		int left = 0, right = num.length() - 1;

		while (left <= right) {
			if (num.charAt(left) != num.charAt(right)) {
				result = false;
				break;
			}
			left++;
			right--;
		}

		return result;
	}
}
