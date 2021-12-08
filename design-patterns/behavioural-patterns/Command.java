//Command Interface
public interface CommandI {
	public void execute();
}

public abstract class Invoker {
	
	private String name;
	
	private CommandI command;
	
	public abstract void invokeCommand();
}

//Invoker
public class Waiter  extends Invoker  {
	
	@Override
	public void invokeCommand() {
		this.getCommand().execute();
	}
	
	public void takeOrder() {
		invokeCommand();
	}
	
	public void serveOrder() {
		invokeCommand();
	}	
}

//Receiver
public class Order {
	
	private String foodItem;
	private Integer foodQuantity;
	
	private boolean orderPlaced;
	private boolean orderValidated;
	private boolean orderPrepared;
	private boolean orderServed;
       
        //Getters //Setters
}

//Client
public class Command{
	
	public Comand() {

		Order myOrder = new Order("Veg Burger", 2);
		
		
		//Place Order
		CommandPlaceOrder cmdPlaceOrder = new CommandPlaceOrder(myOrder);
		
		Waiter waiter = new Waiter();
		waiter.setCommand(cmdPlaceOrder);
		waiter.takeOrder();
		
		
		//Validate Order
		CommandValidateOrder cmdValidateOrder = new CommandValidateOrder(myOrder);
		
		Manager manager = new Manager();
		manager.setCommand(cmdValidateOrder);
		manager.validateOrder();
		
		CommandCookOrder cmdCookOrder = new CommandCookOrder(myOrder);
		
		Cook cook = new Cook();
		cook.setCommand(cmdCookOrder);
		cook.prepareOrder();
		

		CommandServeOrder cmdServeOrder = new CommandServeOrder(myOrder);
		
		waiter.setCommand(cmdServeOrder);
		waiter.serveOrder();
	}

}