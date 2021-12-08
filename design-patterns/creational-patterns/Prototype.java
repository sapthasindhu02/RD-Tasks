public abstract class Car implements Cloneable {

	protected String carName;

	abstract void modelname();

	public Object clone() {

		Object clone;
		try {
			clone = super.clone();
		} catch (CloneNotSupportedException e) {
			e.printStackTrace();
		}
		return clone;
	}
}

public class CarStore {

	private static Map<String, Car> m = new HashMap<String, Car>();

	static {
		m.put("Kia", new Kia());
		m.put("Maruti", new Maruti());
	}

	public static Car getCar(String carName) {

		return (Car)m.get(carName).clone();
	}
}

public class Maruti extends Car {

	public Maruti() {
		this.carName = "Suzuki";
	}

	void modelname() {
		System.out.println("Suzuki D");
	}
}

public class Kia extends Car {

	public Kia() {
		this.carName = "Seltos";
	}

	void modelname() {
		System.out.println("Seltos V");
	}
}
public class Prototype{

	public static void main(String a[]) {
		CarStore.getCar("Kia").modelname();
		CarStore.getCar("Maruti").modelname();
		CarStore.getCar("Maruti").modelname();
		CarStore.getCar("Kia").modelname();
	}
}