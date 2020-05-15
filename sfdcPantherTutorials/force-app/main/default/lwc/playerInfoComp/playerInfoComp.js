import { LightningElement,api } from 'lwc';

export default class PlayerInfoComp extends LightningElement {
     details = [
        {
            playerNumber :'10',
            playerName :'Messi',
        },
        {
            playerNumber :'9',
            playerName :'Benzema',
        },
        {
            playerNumber :'7',
            playerName :'Ronaldo',
        },
        {
            playerNumber :'11',
            playerName :'Neymar',
        },
        {
            playerNumber :'5',
            playerName :'Virgil',
        }
    ]
}