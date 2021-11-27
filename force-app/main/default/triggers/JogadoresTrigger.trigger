// criar uma única trigger para cada objeto
// Versão 2: um pouco de refatoração

trigger JogadoresTrigger on Jogador__c (before update) {

  if (Trigger.isBefore) {
    if (Trigger.isUpdate) {
      for (Jogador__c jogador : Trigger.new) {
        Jogador__c jogadorOld = Trigger.oldMap.get(jogador.Id);

        handleMorte(jogador, jogadorOld);
      }
    }
  }

  static void handleMorte(Jogador__c jogador, Jogador__c jogadorOld) {
    if (!jogadorOld.Eliminado__c && jogador.Eliminado__c) {
      jogador.DataMorte__c = System.now();
    }
  }

}