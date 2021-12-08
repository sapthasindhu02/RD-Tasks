public class CarBody {
  public void setBody() {
    System.out.println("Setting Car Body");
  }
}

public class CarEngine {

  public void setEngine(){
    System.out.println("Setting Car engine");
  }
}

public class CarAccessories {
  public void setAccessories() {
    System.out.println("Setting Car Accessories");
  }
}

public class CarFacade {
  
  CarEngine engine;
  CarBody body;
  CarAccessories accessories;
  
  public CarFacade(){
    engine = new CarEngine();
    body = new CarBody();
    accessories = new CarAccessories();
  }
  
  public void buildCar(){
    System.out.println("Build car started");
    engine.setEngine();
    body.setBody();
    accessories.setAccessories();
    System.out.println("Build car completed");
  }

}

public class Facade{

  public static void main(String[] args) {
    CarFacade facade = new CarFacade();
    facade.buildCar();
  }
}