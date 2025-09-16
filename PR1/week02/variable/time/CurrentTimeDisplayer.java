package week02.variable.time;

public class CurrentTimeDisplayer {
	public static void main(String[] args) {
		// Declaration
		int hour, minute, second;
		long remainder;
		long currentTime = System.currentTimeMillis();
		
		// Prompt user to input s.th
		// Compute || Progress
		remainder = currentTime / 1000;
		
		second = (int) remainder % 60;
		remainder /= 60;
		minute = (int) remainder % 60;
		remainder /= 60;
		hour = (int) (remainder % 24 + 7);
		
		// Display
		System.out.printf("%2d:%2d:%2d",hour, minute, second);
	}
}
