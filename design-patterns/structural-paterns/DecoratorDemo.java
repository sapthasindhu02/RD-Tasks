public abstract class Sweet {
    String description = "Sweet";
 
    public String getDescription() {
        return description;
    }
 
    public abstract double cost();
}

public class Cake extends Sweet {
    @Override
    public String getDescription() {
                 return "a cake";
    }
 
    @Override
    public double cost() {
        return 66;
    }
}
public abstract class Decorator extends Sweet {
    public abstract String getDescription();
}

public class CandleDecorator extends Decorator {
    Sweet sweet;
 
    public CandleDecorator(Sweet sweet) {
        this.sweet = sweet;
    }
 
    @Override
    public String getDescription() {
                 return sweet.getDescription() + ", candle";
    }
 
    @Override
    public double cost() {
        return sweet.cost() + 10;
    }
}

public class FruitDecorator extends Decorator {
    Sweet sweet;
 
    public FruitDecorator(Sweet sweet) {
        this.sweet = sweet;
    }
 
    @Override
    public String getDescription() {
                 return sweet.getDescription() + ",fruit";
    }
 
    @Override
    public double cost() {
        return sweet.cost() + 10;
    }
}
public class DecoratorDemo{
public static void main(String[] args) {
 
    Cake cake = new Cake();
         System.out.println(cake.getDescription() + "total cost" + cake.cost());
 
    FruitDecorator fruitDecorator = new FruitDecorator(cake);
         System.out.println(fruitDecorator.getDescription() + "total cost" + fruitDecorator.cost());
 
    CandleDecorator candleDecorator = new CandleDecorator(cake);
         System.out.println(candleDecorator.getDescription() + "total cost" + candleDecorator.cost());
 
}   
 }