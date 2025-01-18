package com.hanu.se.pr2.lect.review.demo;

public class Population {

	public static void main(String[] args) {
		int currentPopulation = 312032486;
		final int NO_OF_DAYS_IN_YEAR = 365;
		final double A_BIRTH_FREQ = 7.0;
		final double A_DEATH_FREQ = 13.0;
		final double IMMIGRANT_FREQ = 45.0;

		int secInAYear = 365 * 24 * 60 * 60;
		double birthEachYear = secInAYear / A_BIRTH_FREQ;
		double deathEachYear = secInAYear / A_DEATH_FREQ;
		double immigrantEachYear = secInAYear / IMMIGRANT_FREQ;

		double populationIncreaseEachYear = birthEachYear + immigrantEachYear - deathEachYear;

		System.out.println("Population after 1 year: " + (int) (currentPopulation + populationIncreaseEachYear));
		System.out.println(
				"Population after 2 years: " + (int) (currentPopulation + Math.round(populationIncreaseEachYear * 2)));
		System.out.println(
				"Population after 3 years: " + (int) (currentPopulation + Math.round(populationIncreaseEachYear * 3)));
		System.out.println(
				"Population after 4 years: " + (int) (currentPopulation + Math.round(populationIncreaseEachYear * 4)));
		System.out.println(
				"Population after 5 years: " + (int) (currentPopulation + Math.round(populationIncreaseEachYear * 5)));

	}

}
