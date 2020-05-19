public with sharing class AccountCls {
    public Account actObj{get; set;}
    public AccountCls() {
        actObj = new Account();
    }
    public pagereference saveAccount(){
        insert actObj;
        return new pagereference('/'+actObj.Id);
    }
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccountList(){
        return [Select Id, Name, Type, Industry, AnnualRevenue from Account];
    }
}
