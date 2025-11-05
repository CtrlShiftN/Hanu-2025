package week08.collections.array;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class OddList {
	public static void main(String[] args) {
		ArrayList<String> arrList = new ArrayList<>();
		String[] arrStr = { "odd", "even", "abc", "abcd", "abcde", "abcdef" };
		for (int i = 0; i < arrStr.length; i++) {
			arrList.add(arrStr[i]);
		}
		System.out.println(arrList.toString());
		removeEvenLength(arrList);
		System.out.println(arrList.toString());
	}

	public static void removeEvenLength(ArrayList<String> arrList) {
		for (int i = 0; i < arrList.size(); i++) {
//			if (arrList.get(i).length() % 2 == 0) {
//				arrList.remove(i);
//			}
			if (i % 2 == 0) {
				arrList.remove(i);
			}
		}
	}
}
