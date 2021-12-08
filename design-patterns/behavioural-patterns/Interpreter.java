public interface Expression {
	public int interpret(InterpreterEngine ie);
}

public class SubtractExpression implements Expression {

	private String expression;
	
	public SubtractExpression(String expression) {
		this.expression = expression;
	}
	
	@Override
	public int interpret(InterpreterEngine ie) {
		return ie.subtract(expression);
	}
}
public class InterpreterEngine {

	public int add(String input) {
		String[] tokens = interpret(input);
		int num1 = Integer.parseInt(tokens[0]);
		int num2 = Integer.parseInt(tokens[1]);
		return (num1 + num2);
	}

	public int subtract(String input) {
		String[] tokens = interpret(input);
		int num1 = Integer.parseInt(tokens[0]);
		int num2 = Integer.parseInt(tokens[1]);		
		return (num2 - num1);
	}
	
	private String[] interpret(String input) {
		String str = input.replaceAll("[^0-9]", " ");
		str = str.replaceAll("( )+", " ").trim();
		String[] tokens = str.split(" ");
		return tokens;
	}
}

public class Interpreter{
	
	private InterpreterEngine ie;
	
	public Interpreter(InterpreterEngine ie) {
		this.ie = ie;
	}
	
	public int interpret(String input) {
		
		Expression exp = null;
		
		if(input.contains("add")) {
			exp = new AddExpression(input);
		} else if(input.contains("subtract")) {
			exp = new SubtractExpression(input);
		}
		
		int result = exp.interpret(ie);
		System.out.println(input);
		
		return result;
	}
	
	public static void main(String args[]) {
		
		Interpreter ic = new Interpreter(new InterpreterEngine());
		
		System.out.println("Result = " + ic.interpret("add 12 and 13"));
		System.out.println("Result = " + ic.interpret("subtract 76 from 621"));
	}

}