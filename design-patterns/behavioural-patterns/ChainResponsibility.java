public interface Handler {
	String SPAM_MAIL = "SPAM_MAIL";
	String REC_MAIL = "REC_MAIL";
	String NEW_BUSINESS_MAIL = "NEW_BUSINESS_MAIL";

	void setNextChain(Handler nextChain);

	void forwardEMail(Email mailObj);

}

public class Email {

	private String mailsubject;

	public Email(String mailsubject) {
		this.mailsubject = mailsubject;
	}

	public String getSubject() {
		return mailsubject;
	}

	public void setSubject(String mailsubject) {
		this.mailsubject = mailsubject;
	}

}

public class NewBusHandler implements Handler {

	private Handler chain;

	@Override

	public void setNextChain(Handler nextChain) {
		this.chain = nextChain;
	}

	@Override
	public void forwardEMail(Email mailObj) {

		if (mailObj.getSubject().equalsIgnoreCase(Handler.NEW_BUSINESS_MAIL)) // checking mail subject and then
																				// forwarding to next chain handller
		{
			System.out.println("Its a Business mail :Forwarding Mail to Business Development Department.");
		} else {
			this.chain.forwardEMail(mailObj);
		}

	}
}

public class RecHandler implements Handler {
	private Handler chain;

	@Override
	public void setNextChain(Handler nextChain) {
		this.chain = nextChain;
	}

	@Override
	public void forwardEMail(Email mailObj) {
		if (mailObj.getSubject().equalsIgnoreCase(Handler.REC_MAIL)) // checking mail subject and then forwarding to
																		// next chain handller
		{
			System.out.println("Its a Job related mail :Forwarding Mail to Recruitment Dept");
		} else {
			this.chain.forwardEMail(mailObj);
		}

	}

}

public class SpamHandler implements Handler {

	private Handler chain;

	@Override
	public void setNextChain(Handler nextChain) {
		this.chain = nextChain;
	}

	@Override
	public void forwardEMail(Email mailObj) {

		if (mailObj.getSubject().equalsIgnoreCase(Handler.SPAM_MAIL)) // checking mail subject and then forwarding to
																		// next chain handller
		{
			System.out.println("its a SPAM mail : Mail Deleted.");
		} else {
			this.chain.forwardEMail(mailObj);
		}
	}

}

public class ChainResponsibility{

	private Handler chain;

	public ChainResponsibility() {
		this.chain = new SpamHandler();

		Handler recHandlerObj = new RecHandler();
		Handler newbusinessHandlerObj = new NewBusHandler();

		chain.setNextChain(recHandlerObj);
		recHandlerObj.setNextChain(newbusinessHandlerObj);

	}

	// calling a chain with different email subject

	public static void main(String s[]) {

		ChainResponsibility mailChainObj = new ChainResponsibility();

		mailChainObj.chain.forwardEMail(new Email("SPAM_MAIL"));

		mailChainObj.chain.forwardEMail(new Email("REC_MAIL"));

		mailChainObj.chain.forwardEMail(new Email("NEW_BUSINESS_MAIL"));

	}
}