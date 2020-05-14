import { LightningElement, track, wire } from 'lwc';
import lwcController from '@salesforce/apex/firstClass.lwcController';
import mapDemo from '@salesforce/apex/firstClass.mapDemo';

export default class SfdcPantherComp extends LightningElement {
    @track greeting = 'Welcome SarthaK';
    @track message = 'LWC Methodology';
    @track records;
    @track error;
    @track maps;
    @track contacts = [
        {
            Id: '213213123123123',
            Name: 'Sarthak Roy'
        },
        {
            Id: '231231232355514',
            Name: 'Shinjan Karmakar'
        },
        {
            Id: '2321143453355553',
            Name: 'Saura Chanda'
        }
    ];
    @wire(lwcController)
    listOfContacts({ error, data }) {
        if (data) {
            this.records = data;
            this.error = undefined;
            console.log('value of records' + this.records);
        }
        else if (error) {
            this.error = error;
            this.records = undefined;
            console.log('error value' + this.error);
        }
    }
    handleClick() {
        mapDemo().then(result => {
            console.log(result);
            const options = [];
            for(let key in result){
                if(key){
                    options.push({
                        key : key,
                        value : result[key]
                    })
                }
            }
            console.log(options);
            this.maps = options;
        })
            .catch(error => {
                this.error = error;
            })
    }
}