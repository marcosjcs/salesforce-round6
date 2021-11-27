// criar uma única trigger para cada objeto
// Versão 2: forma com Orientação a Objeto 

trigger JogadoresTrigger on Jogador__c (before update) {

  if (Trigger.isBefore) {
    if (Trigger.isUpdate) {
      JogadoresTriggerHandler.beforeUpdate(Trigger.new, Trigger.oldMap);
    }
  }

}