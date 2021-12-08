public without sharing class JogadoresSelector {
    public static List<Jogador__c> selectJogadoresVivos(Set<String> statusList) {
        return [
            SELECT Id, Inteligencia__c, Forca__c, Velocidade__c FROM Jogador__c 
            WHERE Eliminado__c = false
              AND Round__r.Status__c IN :statusList
        ];
    }
}
