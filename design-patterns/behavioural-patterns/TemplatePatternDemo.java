public abstract class MailAccountTemplate {
	
	private void acceptInputs() {
		System.out.println("Accepting email id to create account");
	}
	
	abstract void register();
	
	public final void createAccount() {
		//accept the desired email address
		acceptInputs();
		
		//register with respective Email Provider
		register();
		
		//Display confirmation for account creation.
		displayConfirmation();
	}
	
	private void displayConfirmation() {
		System.out.println("Account created!!");
	}
}
public class GmailAccount extends MailAccountTemplate {

	@Override
	void register() {
		System.out.println("Registered your email account with Gmail");
	}

}

public class YahooAccount extends MailAccountTemplate {

	@Override
	void register() {
		System.out.println("Registered your email account with Gmail");
	}

}
public class TemplatePatternDemo {

	public static void main(String[] args) {

		MailAccountTemplate gmail = new GmailAccount();
		gmail.createAccount();
		
		MailAccountTemplate ymail = new YahooAccount();
		ymail.createAccount();

	}

}