import { LightningElement, api } from "lwc";

export default class ResultadoRoundContainer extends LightningElement {
  @api resultadoRound;

  get totalJogadoresEliminados() {
    if (this.resultadoRound) {
      return "Total Eliminados: " + this.resultadoRound.TotalJogadoresEliminados__c;
    }
    return;
  }

  get premioTotal() {
    if (this.resultadoRound) {
      return "Prêmio: " + this.formatarMoeda(this.resultadoRound.PremioTotal__c);
    }
    return;
  }

  get maioresAssassinos() {
    if (this.resultadoRound) {
      const maiorQuantidadeAssssinatos = this.resultadoRound.Jogadores__r.reduce(
        (max, jogador) => jogador.QuantidadeAssassinatos__c > max ? jogador.QuantidadeAssassinatos__c : max, 0
      );
      
      return this.resultadoRound.Jogadores__r.filter(
        (jogador) => jogador.QuantidadeAssassinatos__c == maiorQuantidadeAssssinatos
      );
    }
    return;
  }

  get imprimeMaioresAssassinos() {
    let texto;
    let jogadores = [];
    if (this.maioresAssassinos) {
      if (this.maioresAssassinos.length == 1) {
        texto = "Maior assassino(a): ";
      } else {
        texto = "Maiores assassinos(as): ";
      }
      this.maioresAssassinos.map(
        (assassino) => (jogadores.push(assassino.Candidato__r.Name))
      );
      return texto + jogadores.join(", ");
    }
    return;
  }

  formatarMoeda(valor) {
    return valor.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})
  }

}
