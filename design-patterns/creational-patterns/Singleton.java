public class Singleton
{
private static Singleton instance;

private Singleton()
{
	// private constructor
}
public void method(){
 System.out.println("Inside method"); 
}

public static Singleton getInstance()
{
	if (instance == null)
	{
	instance = new Singleton();
	}
	return instance;
}
}
 class Test{
public static void main(String args[]){
 Singleton g=Singleton.getInstance();
  g.method();
}
}