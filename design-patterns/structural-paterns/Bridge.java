//this class will be abstracted by subclasses like Maruti,BMW
public abstract class Car {	//this acts as bridge between two interface Workshop and classes 
	
	protected Workshop workShop1;
	protected Workshop workShop2;

	protected Car(Workshop workShop1, Workshop workShop2) {
		this.workShop1 = workShop1;
		this.workShop2 = workShop2;
	}

	abstract public void production_house();
}

public class Maruti extends Car 
{

	public Maruti (Workshop workShop1, Workshop workShop2) 
        {
		super(workShop1, workShop2);
	}

	@Override
	public void production_house() 
        {
		System.out.print("Maruti Car ");
		workShop1.work();
		workShop2.work();

	}

}

public class BMW extends Car {

	public BMW(Workshop workShop1, Workshop workShop2) {
		super(workShop1, workShop2);
	}

	@Override
	public void production_house() {
		System.out.print("BMW Car ");
		workShop1.work();
		workShop2.work();
	}

}

public interface Workshop 
{
	abstract public void work();
}

public class Assemble implements Workshop
{

	@Override
	public void work() 
        {
		System.out.println(" Assembled.");
	}

}
public class Produce implements Workshop {	//this is basic interface

	@Override
	public void work() {
		System.out.print("Produced");
	}

}
public class Bridge{

	public static void main(String[] args) {

		Car car1 = new Maruti(new Produce(),new Assemble());
		car1.production_house();
		Car car2 = new BMW(new Produce(), new Assemble());
		car2.production_house();

	}
}