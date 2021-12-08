import java.util.HashMap;

public class TeaFactory {
	
	private HashMap<String, Tea> flavors = new HashMap<String, Tea>();

	public Tea getTeaFlavor(String flavorName) {
		Tea flavor = flavors.get(flavorName);
		if (flavor == null) {
			flavor = new Tea(flavorName);
			flavors.put(flavorName, flavor);
		}
		return flavor;
	}

	public int getTotalTeaFlavorsMade() {
		return flavors.size();
	}
}

public interface TeaInterface {
	public void serveTea(TeaContext context);
}

public class Tea implements TeaInterface{
	private final String flavor;

	public Tea(String newFlavor) {
		this.flavor = newFlavor;
		System.out.println("Tea flavor is created! - " + flavor);
	}

	public String getFlavor() {
		return this.flavor;
	}

	public void serveTea(TeaContext context) {
		System.out.println("Serving " + flavor + " to table " + context.getTable());
	}
}

class TeaContext {
	private final int tableNumber;

	public TeaContext(int tableNumber) {
		this.tableNumber = tableNumber;
	}

	public int getTable() {
		return this.tableNumber;
	}
}
public class Flyweight{

	// Tea array
	private static Tea[] Teas = new Tea[20];
	
	// table array
	private static TeaContext[] tables = new TeaContext[20];
	private static int ordersCount = 0;
	private static TeaFactory teaFactory;

	public static void takeOrder(String flavorIn, int table) {
		Teas[ordersCount] = teaFactory.getTeaFlavor(flavorIn);
		tables[ordersCount] = new TeaContext(table);
		ordersCount++;
	}

	public static void main(String[] args) {
		teaFactory = new TeaFactory();
		takeOrder("GreenTea", 2);
		takeOrder("GreenTea", 2);
		takeOrder("Regular Tea", 1);
		takeOrder("Ginger Tea", 2);
		takeOrder("Regular Tea", 4);
		takeOrder("GreenTea", 3);
		for (int i = 0; i < ordersCount; ++i) {
			Teas[i].serveTea(tables[i]);
		}
		System.out.println("\nTotal Tea(Types of Tea) objects created: " + teaFactory.getTotalTeaFlavorsMade());
	}

}