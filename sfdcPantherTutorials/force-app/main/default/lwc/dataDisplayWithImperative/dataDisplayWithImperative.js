import { LightningElement, track } from 'lwc';
import getAccountRecordsList from '@salesforce/apex/AccountController.getAccountRecordsList';
export default class DataDisplayWithImperative extends LightningElement {
    @track accountRecords;
    @track errors;
    @track columns = [
        { label: 'label', fieldName: 'Name', type: 'text'  },
        
        { label: 'Industry', fieldName: 'Industry', type: 'text'},
    ];
    connectedCallback(){
        getAccountRecordsList()
            .then(result =>{
                this.accountRecords = result;
            })
            .catch(errors =>{
                this.errors = error;
            });
    }
}