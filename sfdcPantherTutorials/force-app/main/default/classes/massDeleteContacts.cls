public with sharing class massDeleteContacts {
    public massDeleteContacts() {

    }
    @AuraEnabled(cacheable=true)
    public static List<Contact> getContactList(){
        return [SELECT Id, firstName, lastName, Title, Phone, Email FROM Contact WHERE firstName!=Null ORDER BY createdDate DESC];
    }
    @AuraEnabled
    public static void deleteSelectedContacts(List<Id> selContactIdList){
        List<Contact> contactList = [Select Id from Contact where Id IN:selContactIdList];
        if(contactList!=null && contactList.size()>0){
            delete contactList;
        }
    }
}
