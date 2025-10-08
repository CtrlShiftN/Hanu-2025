package week06.object.collections;

public class ListDemo {
	public static void main(String[] args) {
		List list = new List();
		list.printAllElements();
		list.add(1);
		list.add(2);
		list.add(4);
		list.add(3);
		list.printAllElements();
		System.out.println();
		list.remove(2);
		list.printAllElements();
	}
}
