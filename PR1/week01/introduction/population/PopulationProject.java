package week01.introduction.population;

public class PopulationProject {
	public static void main(String[] args) {
		System.out.println("Population after 1 year: " + (312032486 + 365*24*3600/7 - 365*24*3600/13 + 365*24*3600/45));
		System.out.println("Population after 2 year: " + (312032486 + 365*24*3600*2/7 - 365*24*3600*2/13 + 365*24*3600*2/45));
		System.out.println("Population after 3 year: " + (312032486 + 365*24*3600*3/7 - 365*24*3600*3/13 + 365*24*3600*3/45));
		System.out.println("Population after 4 year: " + (312032486 + 365*24*3600*4/7 - 365*24*3600*4/13 + 365*24*3600*4/45));
		System.out.println("Population after 5 year: " + (312032486 + 365*24*3600*5/7 - 365*24*3600*5/13 + 365*24*3600*5/45));
	}
}
