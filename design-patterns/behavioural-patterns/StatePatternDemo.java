public interface GearState {
	public void changeGear();
	public void accelarate(int speed);
}

public class FirstGear implements GearState {
	
	private int gearNumber;
	
	@Override
	public void changeGear() {
		this.gearNumber = 1;
	}
	
	public int getGearNumber() {
		return gearNumber;
	}
	
	@Override
	public void accelarate(int speed) {
		if(speed > 20) {
			System.out.println("Can not be accelarated to " + speed + " kmph in gear 1");
		} else {
			System.out.println("Car is running at " + speed + " kmph in gear 1");
		}		
	}

}

public class SecondGear implements GearState {
	
	private int gearNumber;
	
	@Override
	public void changeGear() {
		this.gearNumber = 2;
	}
	
	public int getGearNumber() {
		return gearNumber;
	}

	@Override
	public void accelarate(int speed) {
		if(speed > 40) {
			System.out.println("Can not be accelarated to " + speed + " in gear 2");
		} else {
			System.out.println("Car is running at " + speed + " kmph in gear 2");
		}		
	}	
}

public class StatePatternDemo {

	public static void main(String[] args) {
		Car car = new Car();
		
		car.accelarate(18);
		
		car.setGearState(new FirstGear());
		car.changeGear();
		
		car.accelarate(30);
		car.accelarate(18);

		car.setGearState(new SecondGear());
		car.changeGear();
		car.accelarate(35);
	}

}