// criar uma única trigger para cada objeto
// Versão 1: forma sem Orientação a Objeto 

trigger JogadoresTrigger on Jogador__c (before update) {

  if (Trigger.isBefore) {
    if (Trigger.isUpdate) {
      for (Jogador__c jogador : Trigger.new) {
        Jogador__c jogadorOld = Trigger.oldMap.get(jogador.Id);

        if (!jogadorOld.Eliminado__c && jogador.Eliminado__c) {
          jogador.DataMorte__c = System.now();
        }
      }
    }
  }

}