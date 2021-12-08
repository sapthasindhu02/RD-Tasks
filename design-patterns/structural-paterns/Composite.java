import java.util.ArrayList;
import java.util.List;

public interface Employee {
	public void print();
}


public class Manager implements Employee {
	
	private String name;
	List<Employee> reportees = new ArrayList<>();
	
	public Manager(String name) {
		this.name = name;
	}
	
	public void addReportee(Employee e) {
		reportees.add(e);
	}
	
	public void remove(Employee e) {
		reportees.remove(e);
	}

	@Override
	public void print() {
		System.out.println(name);
		System.out.println("Reportees..");	
		for(Employee e : reportees) {
			e.print();
		}
	}

}


public class GeneralManager implements Employee {
	
	private String name;
	List<Employee> reportees = new ArrayList<>();
	
	public GeneralManager(String name) {
		this.name = name;
	}
	
	public void addReportee(Employee e) {
		reportees.add(e);
	}
	
	public void remove(Employee e) {
		reportees.remove(e);
	}

	@Override
	public void print() {
		System.out.println(name);		
		System.out.println("Reportees..");	
		for(Employee e : reportees) {
			e.print();
		}
	}

}

public class Developer implements Employee {
	
	private String name;
	
	public Developer(String name) {
		this.name = name;
	}
	
	@Override
	public void print() {
		System.out.println(name);
	}

}
public class Composite{

	public static void main(String[] args) {
		Developer dev1 = new Developer("Developer 1");
		Developer dev2 = new Developer("Developer 2");
		Developer dev3 = new Developer("Developer 3");
		Developer dev4 = new Developer("Developer 4");
		
		Manager mgr1 = new Manager("Manager 1");
		Manager mgr2 = new Manager("Manager 2");
		
		GeneralManager gmgr = new GeneralManager("General Manager");
		
		gmgr.addReportee(mgr1);
		gmgr.addReportee(mgr2);
		
		gmgr.addReportee(dev3);
		
		mgr1.addReportee(dev1);
		mgr1.addReportee(dev4);
		
		mgr2.addReportee(dev2);
		
		gmgr.print();
		
	}

}