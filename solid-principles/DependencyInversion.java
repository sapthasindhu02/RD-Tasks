public interface Product {

    void seeReviews();

    void getSample();

}

public class DVD implements Product {	//low-level module

    @Override
    public void seeReviews() { 
         ...
    }

    @Override  
    public void getSample() {
          ...
    }
}

public class Book implements Product {//low-level module

    @Override
    public void seeReviews() { 
          ...
    }

    @Override
    public void getSample() {
          ...
    }
}
public class Shelf {

    Product product;	//Shelf can reference the Product interface instead of its implementations (Book and DVD).

    void addProduct(Product product) {
          ...
    }

    void customizeShelf() {
          ...
    }
}