class ContactInfo {
    private String homeAddress;
    private String email;
    private int phoneNo;
}

public class Student {
    private String name;
    private int age;
    private int grade;
    private ContactInfo contactInfo;	//Student HAS-A ContactInfo
    public void study() {
        System.out.println("Study");
    }
}