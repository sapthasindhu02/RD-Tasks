class StudentId {
    private String idNumber;
    private String bloodGroup;
    private String accountNumber;
}

public class Student {
    private String name;
    private int age;
    private int grade;
    private StudentId studentId;//Student HAS-A StudentId and StudentId doesnot exist if there is no Student
    public void study() {
        System.out.println("Study");
    }
}