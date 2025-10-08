package week06.object.finance;

public class BankAccount1 {
	// fields (attributes): characteristics of the object
	private double balance;
	private int transactions;
	private double interestRate = 0.05; // annual interest rate, default 5%/year

	// methods: behaviors (related to object)
	// constructors: initialize the very first value of the instance
	public BankAccount1() {
		this.balance = 0.0;
		this.transactions = 1;
	}

	public BankAccount1(double balance) {
		this.balance = balance;
		this.transactions = 1;
	}

	public BankAccount1(double balance, int transactions) {
		this.balance = balance;
		this.transactions = transactions;
	}

	public BankAccount1(double balance, double interestRate) {
		this.balance = balance;
		this.transactions = 1;
		this.interestRate = interestRate;
	}

	public BankAccount1(double balance, int transactions, double interestRate) {
		this.balance = balance;
		this.transactions = transactions;
		this.interestRate = interestRate;
	}

	// getters: only define these if fields are private
	public double getBalance() {
		return this.balance;
	}

	public int getTransactions() {
		return this.transactions;
	}

	// setters: only define these if fields are private and the fields are mutable
	public void setBalance(double balance) {
		this.balance = balance;
	}

	public void setTransactions(int transaction) {
		this.transactions = transaction;
	}

	// validators (PR2 + exceptions)
	// other methods
	public void deposit(double amount) {
		this.balance += amount;
		this.transactions++;
	}

	public void withdraw(double amount) {
		this.balance -= amount;
		this.transactions++;
	}

	public void monthlyFee() {
		this.withdraw(10);
	}

	public double getAnnualInterest() {
		return this.balance * this.interestRate;
	}

	public void transfer(BankAccount1 bankAccount, double amount) {
		this.withdraw(amount + 0.5);
		bankAccount.deposit(amount);
	}

	public static void sayHello(String username) {
		System.out.println("Hello, " + username);
	}

	// comparators (PR2)
	// toString: return a String describing the instance entities
	@Override
	public String toString() {
		return "BankAccount[balance=" + this.getBalance() + ", transactions=" + this.getTransactions() + "]";
	}
}
