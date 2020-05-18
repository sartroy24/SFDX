public with sharing class AccountController {
    public AccountController() {

    }

    @AuraEnabled(cacheable=true)
    public static List<Account> getAccount(){
        return [Select id, name, type, industry from account Limit 20];
    }
    @AuraEnabled
    public static List<Account> getAccountRecordsList(){
        return [Select id, name, type, industry from account Limit 10];
    }
    public static void deleteTestAccounts(){
        List<Account> acctToBeDeleted = [Select Id, name from account where Name Like '%Test%'];
        delete acctToBeDeleted;
    }
}
