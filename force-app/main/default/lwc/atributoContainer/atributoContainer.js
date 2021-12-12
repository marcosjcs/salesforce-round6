import { LightningElement, api } from 'lwc';

export default class AtributoContainer extends LightningElement {
  @api atributo

  get atributoClass() {
    return `width:${this.atributo.value}%;background:`+this.atributo.color;
  }

}