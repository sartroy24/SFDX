public with sharing class accountSearchCls {
    public accountSearchCls() {

    }
    @AuraEnabled(Cacheable=true)
    public static List<Account> getAccounts(String actName){
        String keyString = '%'+actName+'%';

        return [Select id,name from account where name like:keyString];
    }
}
