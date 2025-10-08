package week06.object.lecture.demo;

public class Course {
	// attributes: id, name, description, credit
	private String id;
	private String name;
	private String description;
	private int credit;

	// constructors
	public Course() {
//		this.id = "0";
	}

	public Course(String id, String name) {
		this.id = id;
		this.name = name;
	}

	public Course(String id, String name, String desc) {
		this.id = id;
		this.name = name;
		this.description = desc;
	}

	public Course(String id, String name, String desc, int credit) {
		this.id = id;
		this.name = name;
		this.description = desc;
		this.credit = credit;
	}

	// getters
	public String getCourseID() {
		return this.id;
	}

	public String getName() {
		return this.name;
	}

	public String getDescription() {
		return this.description;
	}

	public int getCredit() {
		return this.credit;
	}

	// setters: No ID setter since ID is immutable
	public void setName(String name) {
		this.name = name;
	}

	public void setDescription(String desc) {
		this.description = desc;
	}

	public void setCredit(int credit) {
		this.credit = credit;
	}

	// validators
	// other methods (optional)
	// non-static
	public void sayHello() {
		System.out.println("Hello, I am a Course object");
	}

	// static
	public static void greeting(String username) {
		System.out.println("Hello, " + username);
	}

	// comparators
	// toString
	public String toString() {
		return "Course[id=" + this.getCourseID() + ",name=" + this.getName() + ",description=" + this.getDescription()
				+ ",credit=" + this.getCredit() + "]";
	}
}
