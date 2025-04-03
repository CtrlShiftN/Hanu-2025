package com.hanu.se.pr2.lect.week10.singleton.demo.greeting;

/**
 * A phone being characterized by attributes such as manName, model, color,
 * year, and guaranteed
 */
public class MobilePhone {
	// Attributes
	private String manName;
	private String model;
	private String color;
	private int year;
	private boolean guaranteed;
	private static MobilePhone instance = null;

	private MobilePhone() {
		
	}
	
	public static MobilePhone getInstance() {
		if (instance == null) {
			instance = new MobilePhone();
		}
		return instance;
	}

	// Mutators
	public boolean setManName(String n) {
		if (validateManName(n)) {
			this.manName = n;
			return true;
		} else {
			return false;
		}
	}

	public boolean setColor(String c) {
		if (validateColor(c)) {
			this.color = c;
			return true;
		} else {
			return false;
		}
	}

	public boolean setGuarantee(boolean g) {
		this.guaranteed = g;
		return true;
	}

	public void setYear(int year) throws NotPossibleException {
		if (!validateYear(year)) {
			throw new NotPossibleException("MobilePhone year setter: Invalid year" + year);
		}
		this.year = year;
	}

	public void setModel(String model) {
		this.model = model;
	}

	// Observers
	public String getManName() {
		return this.manName;
	}

	public String getModel() {
		return this.model;
	}

	public String getColor() {
		return this.color;
	}

	public int getYear() {
		return this.year;
	}

	public boolean isGuaranteed() {
		return this.guaranteed;
	}

	// Helpers
	private boolean validateManName(String n) {
		// optional(manName) = false
		if (n == null || n.length() == 0)
			return false;
		// length(manName) = 30
		return n.length() <= 30;
	}

	private boolean validateModel(String m) {
		// optional(model) = false
		if (m == null || m.length() == 0)
			return false;
		// length(model) = 30
		if (m.length() > 30)
			return false;
		// model.match(/^M-[A-Z]{3}-[0-9]{3}$/)
		return m.matches("^M-[A-Z]{3}-[0-9]{3}$");
	}

	private boolean validateColor(String c) {
		return c != null && c.trim().length() > 1 && c.trim().matches("^(#)([a-fA-F0-9]{3}|[a-fA-F0-9]{6})$");
	}

	private boolean validateYear(int y) {
		return y >= 1970;
	}

	// Default methods
	// Example toString: "MobilePhone: <Samsung, S20, P, 2019, true>"
	@Override
	public String toString() {
		return "MobilePhone: <" + manName + ", " + model + ", " + color + ", " + year + ", " + guaranteed + '>';
	}

	@Override
	public boolean equals(Object obj) {
		// TODO: implement this
		return super.equals(obj);
	}

	public boolean repOK() {
		return validateColor(color) && validateManName(manName) && validateModel(model) && validateYear(year);
	}
}