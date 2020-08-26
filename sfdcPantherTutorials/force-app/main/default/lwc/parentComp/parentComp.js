import { LightningElement } from 'lwc';

export default class ParentComp extends LightningElement {
    handleSimpleEvent(event){
        const message = event.target.tech;
        const location = event.target.location;
        alert('Event Handled :'+message);
        alert('location is : '+location);
    }
}