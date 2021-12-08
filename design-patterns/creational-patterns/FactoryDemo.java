public interface Country {
 public String getArea();
 public String getCapital();
}

public class Factory {
	
	public static Country getCountry(String c) {
		Country co;
		if(c.equalsIgnoreCase("India")) {
			co = new India();
		} 
		else if(c.equalsIgnoreCase("Japan")) {
			co = new Japan();
		}
		return co;
	}
}


public class Japan implements Country {

	@Override
	public String getArea() {
		return "377,962 km2";
	}

	@Override
	public String getCapital() {
		return "Tokyo";
	}
}

public class India implements Country {

	@Override
	public void getArea() {
		System.out.println("3.287 million km2");
	}

	@Override
	public void getCapital() {
		System.out.println("New Delhi");
	}
}

public class FactoryDemo {

	public static void main(String[] args) {
		Country ci = Factory.getCountry("India");
		ci.getArea();
		ci.getCapital();
		Country cj = Factory.getCountry("Japan");
		cj.getCapital();;
	}
}