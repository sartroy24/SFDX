import { LightningElement } from 'lwc';

export default class TestComp extends LightningElement {
    handleEvent(event){
        alert("Inside Grand parent Component man!!");
        console.log("Values of location in grand parent"+event);
    }
}