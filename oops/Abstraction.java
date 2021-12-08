abstract class Mammal{
private int no_legs;
abstract void sound(); 
public void no_of_legs(){
no_legs=4; 
System.out.println("No of legs are"+no_legs);
}
}

public class Cat extends Mammal{
void sound(){
System.out.println(“Sound: cat sound“)  }
}


public class Dog extends Mammal{
void sound(){
System.out.println(“Sound:dog sound“)  }
}

public class Abstraction{
public static void main(String args[]){
Mammal obj=new Dog();
obj.sound();
obj.no_of_legs();
Mammal obj1=new Cat();
obj1.sound();

}	
}



