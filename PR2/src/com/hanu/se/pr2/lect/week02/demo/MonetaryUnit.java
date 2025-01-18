package com.hanu.se.pr2.lect.week02.demo;

public class MonetaryUnit {

	public static void main(String[] args) {
		double amount = 11.56;
		System.out.println("Your amount " + amount + " consists of");
		int remainingCents = (int) (amount * 100);
//		System.out.println("|>" + remainingCents);
		int dollar = remainingCents / 100;
		remainingCents %= 100;
//		System.out.println("|>>>" + remainingCents);
		int quater = remainingCents / 25;
		remainingCents %= 25;
		int dime = remainingCents / 10;
		remainingCents %= 10;
		int nickel = remainingCents / 5;
		int penny = remainingCents % 5;
		System.out.println(dollar + " dollars\r\n" + "    " + quater + " quarters\r\n" + "    " + dime + " dimes\r\n"
				+ "    " + nickel + " nickels\r\n" + "    " + penny + " pennies");
	}

}
