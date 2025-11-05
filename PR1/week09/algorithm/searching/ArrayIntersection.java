package week09.algorithm.searching;

import java.util.*;

public class ArrayIntersection {

	public static void main(String[] args) {
		// Declaration
		HashSet<Integer> setA = new HashSet<>();
		setA.add(3);
		setA.add(9);
		setA.add(5);
		setA.add(6);
		setA.add(2);
		setA.add(4);
		setA.add(1);
		setA.add(7);
		setA.add(5);
		HashSet<Integer> setB = new HashSet<>();
		setB.add(8);
		setB.add(5);
		setB.add(12);
		setB.add(4);
		setB.add(1);

		TreeSet<Integer> setC = intersect(setA, setB);
		System.out.println(setC);
	}

	public static TreeSet<Integer> intersect(HashSet<Integer> setA, HashSet<Integer> setB) {
		// C ← Ø
		TreeSet<Integer> setC = new TreeSet<>();
		// If |A| > |B| Then Swap(A, B) End
		if (setA.size() > setB.size()) {
			// Swap setA with setB
			HashSet<Integer> temp = setA;
			setA = setB;
			setB = temp;
		}
		for (Integer element : setA) {
			if (setB.contains(element)) {
				setC.add(element);
			}
		}
		return setC;
	}

}
