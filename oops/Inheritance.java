//parent class
public class Car{
public void wheels(){
System.out.println(“It has 4 wheels”);
}
}
//child class
public class Maruti800 extends Car{
public void speed(){
System.out.println(“It speed is 60 km/hr”);
}
public void color(){
System.out.println(“Its color is white”);
}
}

//child class of Maruti800 
public class Swift extends Maruti800{
public void speed(){
System.out.println(“It speed is 70 km/hr”);
}
public static void main(String args[]){
Swift m=new Swift();
m.wheels();
m.speed();
m.color();
}
}
