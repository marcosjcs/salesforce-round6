import { LightningElement, api } from 'lwc';

export default class AtributoContainer extends LightningElement {
  @api atributoValue;
  @api atributoLabel;
  @api atributoColor

  get atributoClass() {
    return `width:${this.atributoValue}%;background:`+this.atributoColor;
  }

}