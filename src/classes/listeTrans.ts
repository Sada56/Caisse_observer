import { IObserver } from "../interface/IObserver";
import { Caisse, Transaction } from './caisse';


export class ListeTrans implements IObserver {
    update(data: Caisse) {
        const transactions = data.getTransaction()
        transactions.forEach(transaction => {
            console.log(transaction.getMontant(), transaction.getMotif(), transaction.getWho())
            
        });
    }
} 