abstract class Observer {
	
	protected Topic topic;

	public abstract void update();
}

public class Topic {

	private List<Subscriber> subscribers = new ArrayList<>();
	private String topicName;
	private String message;

	public Topic(String name) {
		this.topicName = name;
	}

	public void subscribe(Subscriber s) {
		subscribers.add(s);
	}

	public void publish(String message) {
		this.message = message;
		notifySubscribers();
	}

	public void notifySubscribers() {
		for (Subscriber sub : subscribers) {
			sub.update();
		}
	}

	public String getTopicName() {
		return topicName;
	}

	public String getMessage() {
		return message;
	}
}

public class Subscriber extends Observer {
	
	private String name;
	
	public Subscriber(String n, Topic t) {
		this.name = n;
		this.topic = t;
		this.topic.subscribe(this);
	}

	@Override
	public void update() {
		System.out.println(name + " new message arrived -> " + this.topic.getMessage());		
	}

	public String getName() {
		return name;
	}
}
public class ObserverDemo {

	public static void main(String[] args) {
		
		Topic t = new Topic("opencodez");
		
		new Subscriber("Sub 1", t);
		new Subscriber("Sub 2", t);
		
		t.publish("Hello for topic Subscribers");
		
		new Subscriber("Sub 3", t);
		
		t.publish("Hello again for topic Subscribers");
		
	}

}