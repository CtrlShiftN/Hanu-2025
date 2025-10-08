package week06.object.collections;

public class List {
	private int[] els;
	private int size = 0;

	public List() {
		this.els = new int[0];
	}

	public void add(int number) {
		int[] temp = new int[this.size() + 1];
		for (int i = 0; i < this.size(); i++) {
			temp[i] = this.els[i];
		}
		temp[this.size()] = number;
		this.els = temp;
	}

	public void remove(int index) {
		int[] temp = new int[this.size() - 1];
		for (int i = 0; i < temp.length; i++) {
			if (i < index) {
				temp[i] = this.els[i];
			} else {
				temp[i] = this.els[i + 1];
			}
		}
		this.els = temp;
	}

	public int get(int index) {
		return this.els[index];
	}

	public int size() {
		return this.els.length;
	}

	public void printAllElements() {
		for (int i = 0; i < this.els.length; i++) {
			System.out.print(this.els[i] + " ");
		}
	}

}
