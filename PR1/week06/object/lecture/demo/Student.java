package week06.object.lecture.demo;

public class Student {
	// attributes (variables):
	private long studentID;
	private String name;
	private String email;
	private String courseID;

	// constructors: empty parameters list, with parameters
	public Student() {
		this.studentID = 2301040014L; // optional
		// default constructor: init an instance of Student with default values
	}

	// Constructors without validation
	public Student(long newStudentID, String newName) {
		this.studentID = newStudentID;
		this.name = newName;
	}

	public Student(long newStudentID, String newName, String email) {
		this.studentID = newStudentID;
		this.name = newName;
		this.email = email;
	}

	public Student(long newStudentID, String newName, String email, String courseID) {
		this.studentID = newStudentID;
		this.name = newName;
		this.email = email;
		this.courseID = courseID;
	}

	// getters & setters
	public long getStudentID() {
		return this.studentID;
	}

	public String getName() {
		return this.name;
	}

	public String getEmail() {
		return this.email;
	}

	public String getCourseID() {
		return this.courseID;
	}

	// Setters without validation
	// NOTE: there is no studentID setter since it can not be changed
//	public void setStudentID(long newStudentID) {
//		this.studentID = newStudentID;
//	}

	public void setName(String name) {
		this.name = name;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public void setCourseID(String courseID) {
		this.courseID = courseID;
	}

	// validators
	// comparators
	// other methods
	public void sayHello() {
		System.out.println("Hello, I am " + this.getName());
	}

	public void speak(String message) {
		System.out.println(this.getName() + " says: " + message);
	}

	// toString
	public String toString() {
		return "Student[studentID=" + this.getStudentID() + ",name=" + this.getName() + ",email=" + this.getEmail()
				+ ",courseID=" + this.getCourseID() + "]";
	}
}
