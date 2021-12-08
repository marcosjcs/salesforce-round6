import { LightningElement, api } from "lwc";

export default class ResultadoRoundContainer extends LightningElement {
  @api maioresAssassinos;

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
}
