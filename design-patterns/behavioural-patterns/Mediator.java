public class PortalUser {
	
	private String name;
	
	public PortalUser(String name) {
		this.name = name;
	}

	public void sendMessage(String message) {
		OpenPortal.showMessage(message, this);
	}
	
	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

}

public class OpenPortal {
	
	public static void showMessage(String message, PortalUser sender) {
		 System.out.println(new Date().toString() + " [" + sender.getName() + "] : " + message);
	}

}
public class Mediator {

	public static void main(String[] args) {
		PortalUser jack = new PortalUser("Jack");
		PortalUser tony = new PortalUser("Tony");
		
		jack.sendMessage("Hi Tony.");
		tony.sendMessage("Hello Jack, how are you?");
	}

}