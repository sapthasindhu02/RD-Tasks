public class TextPrinter {	//Its responsibility is to print Text
    TextManipulator textManipulator;

    public TextPrinter(TextManipulator textManipulator) {
        this.textManipulator = textManipulator;
    }

    public void printText() {
        System.out.println(textManipulator.getText());
    }
}


public class TextManipulator {	//The only job of this class should be manipulating text.
    private String text;

    public TextManipulator(String text) {
        this.text = text;
    }

    public String getText() {
        return text;
    }

    public void appendText(String newText) {
        text = text.concat(newText);
    }
}

public class SingleResponsibility{
public static void main(String args[]){
TextManipulator txt=new TextManipulator("Design Principles");
TextPrinter tp=new TextPrinter(txt);
tp.printText();

}
}