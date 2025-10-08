package week04.array.lecture.demo;

import java.util.Arrays;
import java.util.*;

public class ArrayDemo {

	public static void main(String[] args) {
		// declare array
		double[] myList = new double[10];
		for (int i = 0; i < myList.length; i++) {
			System.out.println(i+" - " + myList[i]);
		}
		
		double[] numbers = {6.0, 4.4, 1.9, 2.9, 3.4, 3.5}; 
		Arrays.sort(numbers); // asc order
		System.out.println(Arrays.toString(numbers));
		// TODO: sort desc order
	}

}
