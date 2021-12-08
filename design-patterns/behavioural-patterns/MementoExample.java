public class Caretaker {
	
	static int cnt=1;
    private ArrayList<Memento> mementos = new ArrayList<>();

    public void addToMemento(Memento m) 
    {
        mementos.add(m);
        System.out.println("Round-" +cnt++  +" added to Memento\n");
    }

    public Memento getMemento() 
    {
    	int lastSavedState = ((mementos.size() - 1) < 0) ? 0 : (mementos.size() - 1);
    	Memento mem = mementos.get(lastSavedState);
    	
    	//remove last restored state.
    	mementos.remove(lastSavedState);
    	
        return mem;
    }
}

public class Originator {
	
	private String state;

	public void setState(String state) {
		System.out.println("Originator: Starting with : " + state);
		this.state = state;
	}

	public Memento saveState() {
		System.out.println("Originator: Completed :" + state);
		return new Memento(state);
	}

	public void restoreState(Memento m) {
		state = m.getState();
		System.out.println("Originator: Now player need to start with  " + state);
	}
}

public class Memento {
	
	private String state;

	public Memento(String state) {
		this.state = state;
	}

	public String getState() {
		return state;
	}
}