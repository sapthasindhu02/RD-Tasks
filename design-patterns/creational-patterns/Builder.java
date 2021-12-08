public class Customer {

	private final String Name; 	// required parameter
	private final String email; 		// required parameter
	private final String phone; 		// optional parameter


	private Customer(CustomerBuilder builder) {
		this.Name = builder.Name;
		this.phone = builder.phone;
		this.email = builder.email;
	}

	public String getName() {
		return firstName;
	}
	public String getPhone() {
		return phone;
	}
	public String getEmail() {
		return email;
	}
	public void printIt(){
		System.out.println("Hi "+this.Name);
		}
	public static class CustomerBuilder {

		private String Name;
		private String phone;
		private String email;

		public CustomerBuilder(String Name, String email) {
			this.Name = Name;
			this.email = email;
		}
		public CustomerBuilder phone(String phone) {
			this.phone = phone;
			return this;
		}
        public Customer build() 
        {
             Customer cust =  new Customer(this);
             return cust;
        }

	}

}

public class Builder {

	public static void main(String[] args) {

		Customer cust1 = new Customer.CustomerBuilder("Mark","mark@gmail.com")
						.phone("9999999999")
						.build();
		cust1.printIt();

		Customer cust2 = new Customer.CustomerBuilder("Mathew","mathew.gmail.com").phone("9898989898").build();
		cust2.printIt();
	}
}