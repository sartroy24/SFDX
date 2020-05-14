import { LightningElement, track } from 'lwc';

export default class CalcTest extends LightningElement {
    firstNum = 0;
    secondNum = 0;
    @track result = 0;
    handleChanges(event){
        if(event.target.name==='fnumber'){
            
            this.firstNum = event.target.value;
            console.log('Hey one');
        }
        if (event.target.name==='snumber') {
            
            this.secondNum = event.target.value;
            console.log('Hey 2');
        }
        this.result = parseInt(this.firstNum)+ parseInt(this.secondNum);
    }
}