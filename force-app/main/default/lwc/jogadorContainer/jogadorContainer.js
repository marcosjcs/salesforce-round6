import { api, LightningElement } from "lwc";

export default class JogadorContainer extends LightningElement {
  @api jogador;

  get vivoMortoClass() {
    return this.jogador.Morreu__c ? "morto" : "vivo";
  }
  get atributos() {
    if(!this.jogador) {
      return [];
    }
    return [{label: 'Inteligência',
            value: this.jogador.Inteligencia__c,
            color: 'blueviolet'
            },
            {label: 'Velocidade',
            value: this.jogador.Velocidade__c,
            color: 'dodgerblue'
            },
            {label: 'Força',
            value: this.jogador.Forca__c,
            color: 'crimson'
            }
          ];
  }
}
