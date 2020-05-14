public with sharing class firstClass {
    public firstClass() {

    }
    public static void method1(){
        System.debug('Working');
    }
    @AuraEnabled(cacheable=true)
    public static string lwcController(){
        return 'Sarthak Roy';
    }
    @AuraEnabled(cacheable=true)
    public static Map<String,Integer> mapDemo(){
         Map<String,Integer> newMap = new Map<String,Integer>();
         newMap.put('Sarthak', 24);
         newMap.put('Sunanda', 31);
         newMap.put('Sabitri', 53);
         return newMap;
    }
}
