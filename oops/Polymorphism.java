//Method Overloading
public class Add1 {
      void add(int var1, int var2){
            System.out.println(var1 + var2);
      }     
      void add(double var1, int var2){
            System.out.println(var1 + var2);
      }   
  void add(int num1, int num2, int num3){
            System.out.println(num1 + num2 + num3);
      }  
      public static void main(String args[]){
            Add1 addExample = new Add1();
            //method call
            addExample.add(10, 20);
            addExample.add(12.50, 30);
            addExample.add("10f ", "10");
	addExample.add(20, 30, 40);
      }
}


//method overriding

class Student {
      
      public void show(){
            System.out.println("Student details.");
      }
}

public class CollegeStudent extends Student {
      
      public void show(){
            System.out.println("College Student details.");
      }
      public static void main(String args[]){
       CollegeStudent obj = new CollegeStudent();
       obj.show();
      }
}