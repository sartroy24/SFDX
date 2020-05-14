import { LightningElement, track } from 'lwc';

export default class WelcomeTrackProperty extends LightningElement {
    @track greetings = 'Take Care';
 


    handleGreetingsChanges(event){
        this.greetings = event.target.value;
    }
}