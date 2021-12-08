public abstract class AbFactory {
	abstract Account getAccount(String type) ;
}

public class AccountFactory extends AbFactory {

	@Override
	Account getAccount(String type) {

		Account account;

		if (type.equalsIgnoreCase("Savings")) {
			account = new SavingsAccount();
		} else if (type.equalsIgnoreCase("Current")) {
			account = new CurrentAccount();
		}

		return account;
	}

}

public class LoanFactory extends AbFactory {

	
	Account getAccount(String type) {

		Account account;

		if (type.equalsIgnoreCase("Home")) {
			account = new HomeLoan();
		} else if (type.equalsIgnoreCase("Education")) {
			account = new EducationLoan();
		}

		return account;
	}

}

public interface Account {
	public void getInterestRate();
}

public class CurrentAccount implements Account {

	
	public void getInterestRate() {
		System.out.println("Current Account Interest Rate = 5.0% pa");
	}

}

public class EducationLoan implements Account {
	public void getInterestRate() {
		System.out.println("Education Loan Interest Rate = 11.5% pa");
	}

}

public class HomeLoan implements Account {

	public void getInterestRate() {
		System.out.println("Home Loan Interest Rate = 8.5% pa");
	}

}


public class SavingsAccount implements Account {

	public void getInterestRate() {
		System.out.println("Savings Account Interest Rate = 4.0% pa");
	}

}

public class FactoryProvider {
	public static AbFactory getFactory(String choice) {
		AbFactory af ;
		if ("Loan".equalsIgnoreCase(choice)) {
			af = new LoanFactory();
		} else if ("Account".equalsIgnoreCase(choice)) {
			af = new AccountFactory();
		}
		return af;
	}
}


public class AbstractFactory{

	public static void main(String[] args) {

		AbFactory abf = FactoryProvider.getFactory("Loan");

		Account loan1 = abf.getAccount("Home");
		loan1.getInterestRate();

		Account loan2 = abf.getAccount("Education");
		loan2.getInterestRate();

		AbFactory af = FactoryProvider.getFactory("Account");

		Account account1 = af.getAccount("Savings");
		account1.getInterestRate();

		Account account2 = af.getAccount("Current");
		account2.getInterestRate();

	}

}