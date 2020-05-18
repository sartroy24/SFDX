import { LightningElement, track } from 'lwc';
import createAccount from '@salesforce/apex/accountCreationController.createAccount';
import ACCOUNT_NAME from '@salesforce/schema/Account.Name';
import ACCOUNT_TYPE from '@salesforce/schema/Account.Type';
import ACCOUNT_PHONE from '@salesforce/schema/Account.Phone';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

//import { NavigationMixin } from 'lightning/navigation';

export default class AccountCreation_Apex extends LightningElement {
    @track accountid;
    @track error;
    @track accountRecord = {
        Name:ACCOUNT_NAME,
        Type:ACCOUNT_TYPE,
        Phone:ACCOUNT_PHONE
    };
    handleNameChange(event){
        this.accountRecord.Name = event.target.value;
    }
    handleTypeChange(event){
        this.accountRecord.Type = event.target.value;
    }
    handlePhoneChange(event){
        this.accountRecord.Phone = event.target.value;
    }
    handleSaveAccount(){
        createAccount({accountRecObj:this.accountRecord})
        .then(result =>{
            this.accountRecord = {};
            this.accountid = result.Id;
            const evt = new ShowToastEvent({
                title: 'Success',
                message: 'Account Record is created successfully',
                variant: 'success'
            });
            this.dispatchEvent(evt);
        })
        .catch(error =>{
            this.error = error.message;
        });
    }
}