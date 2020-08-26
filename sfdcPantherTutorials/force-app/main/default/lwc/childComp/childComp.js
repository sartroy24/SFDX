import { LightningElement, api } from 'lwc';

export default class ChildComp extends LightningElement {
   @api location;
   @api tech;
    handleEvent(){
        const eventS = new CustomEvent('simple',{bubbles: true, composed: false});
        this.dispatchEvent(eventS);
    }
}