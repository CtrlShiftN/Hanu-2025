package com.hanu.se.pr2.lect.week10.singleton.demo.greeting;

/**
 * Person who owns the mobile phone
 */
public class Person {
    private int id;
    private String name;
    private MobilePhone phone;

    public Person(int i, String n)
            throws NotPossibleException {
        if (!validateId(i)) {
            throw new NotPossibleException("Person.init: Invalid id: " + i);
        }
        if (!validateName(n)) {
            throw new NotPossibleException("Person.init: Invalid name: " + n);
        }
        this.id = i;
        this.name = n;
    }

    public int getId() {
        return this.id;
    }

    public String getName() {
        return this.name;
    }

    public boolean setName(String name) {
        if (validateName(name)) {
            this.name = name;
            return true;
        } else {
            return false;
        }
    }

    public boolean setPhone(MobilePhone phone) {
        this.phone = phone;
        return true;
    }

    private boolean validateId(int i) {
        return (i >= 1);
    }

    private boolean validateName(String s) {
        // optional(name) = false
        if (s == null || s.length() == 0) return false;
        // length(name) = 30
        if (s.length() > 30) return false;
        // name.match(/^\w+ \w+$/)
        return s.matches("^\\w+ \\w+$");
    }

    public boolean repOK() {
        return validateId(this.id) && validateName(this.name);
    }

    public void greet() {
        System.out.println("Hello, my name is " + this.name + "!");
    }

    @Override
    public String toString() {
        return "Person: <" + id + ", " + name + ", " + phone + ">";
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Person person = (Person) o;
        return (id == person.id);
    }

}
