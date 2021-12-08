import java.util.ArrayList;
import java.util.List;

public interface Network {
	public void connect(String url);
}

public class ProxyNetwork implements Network {

	private Network network;

	public ProxyNetwork() {
		this.network = new RealNetwork();
	}

	public Network getNetwork() {
		return this.network;
	}

	@Override
	public void connect(String url) {
		if(!isConnectionBanned(url)) {
			this.network.connect(url);
		} else {
			System.out.println("Connection to " + url + " is prohibited!!!");
		}
	}

	public boolean isConnectionBanned(String url) {

		List<String> banned = new ArrayList<String>();
		banned.add("abc.com");
		banned.add("xyz.com");

		if (banned.contains(url)) {
			return true;
		}

		return false;
	}

}

public class RealNetwork implements Network {

	@Override
	public void connect(String url) {
		System.out.println("Connected to .." + url);
	}

}

public class Proxy{

	public static void main(String[] args) {

		Network proxy = new ProxyNetwork();
		proxy.connect("abc.com");
		
		proxy.connect("bbc.com");
		
		System.out.println("");
		System.out.println("By passing Proxy.. using Real class");
		
		Network real = new RealNetwork();
		real.connect("abc.com");
	}

}