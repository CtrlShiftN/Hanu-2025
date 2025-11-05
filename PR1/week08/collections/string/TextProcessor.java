package week08.collections.string;

public class TextProcessor {
	public static void main(String[] args) {
		String content = "Roses are red. Violets are blue, Sugar is sweet... And so are you.";
		System.out.println(cleanText(content));
	}

	public static String cleanText(String content) {
		String cleanText = content.toLowerCase();
		// 1.
		String temp = "";
		for (int i = 0; i < cleanText.length(); i++) {
			if (Character.isLetter(cleanText.charAt(i)) || Character.isWhitespace(cleanText.charAt(i))) {
				temp += cleanText.charAt(i) + "";
			}
		}
		cleanText = temp;
		// 2. 
		cleanText = content.toLowerCase();
		cleanText = cleanText.replaceAll("[^a-zA-Z ]", "");
		
		return cleanText;
	}
}
