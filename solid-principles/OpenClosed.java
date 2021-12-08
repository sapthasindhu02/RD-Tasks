public interface CalculatorOperation {
    void perform();
}

public class Calculator {

    public void calculate(CalculatorOperation operation) {
        if (operation == null) {
            throw new InvalidParameterException("Cannot perform operation");
        }
        operation.perform();
    }
}

public class Addition implements CalculatorOperation {	//concrete class 
    private double left;
    private double right;
    private double result;

    public Addition(double left, double right) {
        this.left = left;
        this.right = right;
    }

    @Override
    public void perform() {
        result = left + right;
       System.out.println("After adding two numbers result is :"+result);
    }
}

public class Subtraction implements CalculatorOperation {
    private double left;
    private double right;
    private double result = 0.0;

    public Subtraction(double left, double right) {
        this.left = left;
        this.right = right;
    }
 @Override
    public void perform() {
        result = left - right;
       System.out.println("After Subtracting two numbers result is :"+result);
    }
}


public class OpenClosed{
public static void main(String args[]){
CalculatorOperation op=new Addition(25.0,30.0); 
Calculator calc=new Calculator(op);
}
}
