//context
class Person{
    Transport t;
    public Person(Transport t){
        this.t=t;
    }
    public void go(){
        t.move();
    }
}
//interface
public interface Transport{
     public void move();
}
//strategies start
class Car implements Transport{
    public Car(){

    }
    public void move(){
        System.out.println("Transport using Car");
    }
}
class Bus implements Transport{
    public Bus(){

    }
    public void move(){
        System.out.println("Transport using Bus ");
    }
}
//testclient
class StratDemo{
    public static void main(String args[]){
        Transport tr=new Car();
        Person person=new Person(tr);
        person.go();

        Transport tr2=new Bus();
        Person person2=new Person(tr2);
        person2.go();
    }
}