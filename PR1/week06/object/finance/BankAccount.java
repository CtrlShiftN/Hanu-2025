package week06.object.finance;

public class BankAccount {
	// fields (attributes): characteristics of the object
	private double balance = 0.0;
	private int transactions; // Quantity
	private double interestRate = 0.05; // annual interest rate
	private String holderName;

	// constructors: initialize values for instances
	public BankAccount() {
		this.transactions = 0;
	}

	public BankAccount(String newHolderName) {
		this.transactions = 0;
		this.holderName = newHolderName;
	}

	public BankAccount(String newHolderName, double balance) {
		this.transactions = 1;
		this.holderName = newHolderName;
		this.balance = balance;
	}

	public BankAccount(String newHolderName, double balance, double interestRate) {
		this.transactions = 1;
		this.holderName = newHolderName;
		this.balance = balance;
		this.interestRate = interestRate;
	}

	// getters: Return all attrs, only used with private fields, non-static methods
	public String getHolderName() {
		return this.holderName;
	}

	public double getBalance() {
		return this.balance;
	}

	public double getInterestRate() {
		return this.interestRate;
	}

	public double getTransactions() {
		return this.transactions;
	}

	// setters: Modify the mutable fields, only used with private fields
	// NOTE: holderName is the account's identity so it's immutable,
	// transactions is auto-increment field so it's immutable
	// immutable fields do not have setters
	public void setBalance(double balance) {
		this.balance = balance;
	}

	public void setInterestRate(double interestRate) {
		this.interestRate = interestRate;
	}

	// validators (PR2 + exceptions)
	// comparators (PR2)
	// other methods: other behaviors
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

	public void setAnnualInterest(double interest) {
		this.interestRate = interest;
	}

	public void transfer(BankAccount otherAccount, double amount) {
		this.withdraw(amount + 0.5);
		otherAccount.deposit(amount);
	}

	// toString: Return a String representing the object's entities
	public String toString() {
		return this.getHolderName() + ", " + (this.balance < 0 ? "-" : "") + "$" + Math.abs(this.getBalance());
	}
}
