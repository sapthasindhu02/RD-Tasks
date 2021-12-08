public interface FormatAndroidPhone {
    void useMicroUsb();//connector for android phone
    void charge();
}

public class AndroidPhone implements FormatAndroidPhone {

    private boolean connected = false;

    @Override
    public void useMicroUsb() {
        connected = true;
        System.out.println("MicroUSB connected");
    }

    @Override
    public void charge() {
        if (connected) {
            System.out.println("Recharging...");
        } else  {
            System.out.println("Connect MicroUSB first");
        }
    }
}

public interface FormatIPhone {
    void useLightning();//connector for iphone 
    void charge();
}


public class IPhone implements FormatIPhone {

    private boolean connected = false;

    @Override
    public void useLightning() {
        connected = true;
        System.out.println("Lightning connected");
    }

    @Override
    public void charge() {
        if (connected) {
            System.out.println("Recharging...");
        } else {
            System.out.println("Connect Lightning first");
        }
    }
}


//if we want to charge iphone with androidphone connector microusb cable we need to use adapter
public class IPhoneAdapter implements FormatAndroidPhone {

    private FormatIPhone mobile;

    IPhoneAdapter(FormatIPhone mobile) {
        this.mobile = mobile;
    }

    @Override
    public void useMicroUsb() {
        System.out.println("MicroUSB Adapter connected");
        this.mobile.useLightning();
    }

    @Override
    public void charge() {
        this.mobile.charge();
    }
}

public class Adapter{

    public static void main(String[] args) {
        System.out.println("Recharging IPhone with Lightning cable");
        IPhone iPhone = new IPhone();
        iPhone.useLightning();
        iPhone.charge();

        System.out.println("***");

        System.out.println("Recharging Android Phone with MicroUSB cable");
        AndroidPhone androidPhone = new AndroidPhone();
        androidPhone.useMicroUsb();
        androidPhone.charge();

        System.out.println("***");

        System.out.println("Recharging IPhone with MicroUSB cable");
        IPhone phone = new IPhone();
        FormatAndroidPhone adapter = new IPhoneAdapter(phone);
        adapter.useMicroUsb();
        adapter.charge();
    }

}