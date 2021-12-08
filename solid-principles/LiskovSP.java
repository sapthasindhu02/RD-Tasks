public abstract class Account {
    protected abstract void deposit(BigDecimal amount);	//abstract method to deposit amount
   // protected void withdraw(BigDecimal amount);{	//abstract method to withdraw amount
  //	System.out.println("Amount withdrawn");
  //	}
}

public abstract class WithdrawableAccount extends Account {
    protected void withdraw(BigDecimal amount);{	//abstract method to withdraw amount
  	System.out.println("Amount withdrawn");
  	}
}

public class SavingsAccount extends WithdrawableAccount{
	public SavingsAccount (){
		//...
	}
	@Override
    	protected void deposit(BigDecimal amount) {
        		System.out.println("Amount deposited into Savings account ");
   	 }  
      
        	@Override
        	protected void withdraw(BigDecimal amount) {
           		System.out.println("Amount withdrawn from Savings account ");
       	}


}


public class WithdrawalService {
    private WithdrawableAccount withdrawableAccount;

    public WithdrawalService(WithdrawableAccount withdrawableAccount) {
        this.withdrawableAccount = withdrawableAccount;
    }

    public void withdraw(BigDecimal amount) {
        withdrawableAccount.withdraw(amount);
    }
}

public class FixedTermDepositAccount extends Account {	//The bank now wants to offer a high interest-earning fixed-term deposit account to its customers
	public FixedTermDepositAccount(){
		//...
	}
	@Override
    	protected void deposit(BigDecimal amount) {
        		System.out.println("Amount deposited into fixed-term deposit account ");
   	 }  
      
          //*when withdraw method is present in Account class *	
         // the bank doesn't want to allow withdrawals for the fixed-term deposit accounts. so below method throws exception
        //	@Override
        //	protected void withdraw(BigDecimal amount) {
        //   throw new UnsupportedOperationException("Withdrawals are not supported by FixedTermDepositAccount!!");	//this violates LSP
       //   }


}




public class LiskovSP{
public static void main(String args[]){
LiskovSP c=new LiskovSP();
Account mFT = new FixedTermDepositAccount();
mFT.deposit(new BigDecimal(1000.00));

WithdrawalService withdrawalS = new WithdrawalS(mFT);
withdrawalS.withdraw(new BigDecimal(100.00));
}
}