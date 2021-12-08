public interface Visitor {
	public void visit(Person p);
	public void visit(Luggage l);
}

public interface Transportable {
	public void accept(Visitor v);
}

public class Person implements Transportable {

	private double fare;
	private int numberOfPersons;
	
	public Person(double f, int n) {
		fare = f;
		numberOfPersons = n;
	}
	
	@Override
	public void accept(Visitor visitor) {
		visitor.visit(this);
	}
        
        //Getters //Setters
}
public class Luggage implements Transportable {

	private double fare;
	private double weight;
	
	public Luggage(double f, double w) {
		fare = f;
		weight = w;
	}		

	@Override
	public void accept(Visitor visitor) {
		visitor.visit(this);
	}

	//Getters //Setters
}


public class Taxi implements Visitor {
	
	private double totalFare;

	@Override
	public void visit(Person p) {
		totalFare = totalFare + (p.getFare() * p.getNumberOfPersons());
	}

	@Override
	public void visit(Luggage l) {
		totalFare = totalFare + (l.getFare() * l.getWeight());
	}

	public double getTotalFare() {
		return totalFare;
	}
	
}

public class VisitorDemo{
	
	public static void main(String args[]) {
		
		List<Transportable> list = new ArrayList<Transportable>();
		
		list.add(new Person(12.4f, 1));
		list.add(new Luggage(10.9f, 5));
		
		Taxi taxi = new Taxi();
		for(Transportable t : list) {
			t.accept(taxi);
		}
		
		System.out.println(String.format("Total Fare : $%.2f", taxi.getTotalFare()));
		
	}

}
