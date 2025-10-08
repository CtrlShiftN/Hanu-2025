package week06.object.finance;

public class BankAccount2 {
	private double balance;
	private int transactions;
	private double interestRate;
	private String holderName;

	public BankAccount2(String holderName, double initial) {
		this.holderName = holderName;
		this.balance = initial;
		this.transactions = 1;
		this.interestRate = 0.0;
	}

	public BankAccount2(String holderName, double initial, double interestRate) {
		this.holderName = holderName;
		this.balance = initial;
		this.transactions = 1;
		this.interestRate = interestRate;
	}

	public void deposit(double amount) {
		balance += amount;
		transactions++;
	}

	public void withdraw(double amount) {
		balance -= amount;
		transactions++;
	}

	public void monthlyFee() {
		this.withdraw(10);
	}

	public void addAnnualInterest() {
		this.deposit(this.balance * this.interestRate * 12);
	}

	public void transfer(BankAccount2 newAccount, double amount) {
		if (this.balance < amount + 0.5) {
			System.out.println("Balance not enough to transfer");
		} else {
			this.withdraw(amount + 0.5);
			newAccount.deposit(amount);
		}

	}

	public String toString() {
		return this.holderName + ", " + (this.balance < 0 ? "-" : "") + "$" + Math.abs(this.balance);
	}
}
