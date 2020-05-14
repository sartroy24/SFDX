public with sharing class AccountController {
    public AccountController() {

    }

    @AuraEnabled(cacheable=true)
    public static List<Account> getAccount(){
        return [Select id, name, type, industry from account Limit 10];
    }
    @AuraEnabled
    public static List<Account> getAccountRecordsList(){
        return [Select id, name, type, industry from account Limit 10];
    }
}
