import { IObserver } from '../interface/IObserver';
import { ISubject } from '../interface/ISubject';

export class Caisse implements ISubject{
    private observers :IObserver[] = []
    private transactions : Transaction[] = [] 
    constructor(private solde:number){}
 
    addTransaction(trans : Transaction){
        this.transactions.push(trans)
        if (trans.getType() === "debit") {
            this.solde -= trans.getMontant()
        } else {
            this.solde += trans.getMontant()
            
        }


        this.notifyObservers()
    }
    getSolde(){
        return this.solde
    }
    getTransaction(){
        return this.transactions
    }

    subscribe(obs: IObserver) {
        this.observers.push(obs)
        obs.update(this)

    }
    unsubscrible(obs: IObserver) {
        this.observers.splice(this.observers.indexOf(obs),1)
    }
    notifyObservers() {
        for (const obs of this.observers){
            obs.update(this)
            
        }
    }
}

export class Transaction{
    constructor(private type:string, private montant:number,private who:string, private motif:string){}
    getType(){
        return this.type
    }

    getMontant(){
        return this.montant
    }

    getWho(){
        return this.who
    }

    getMotif(){
        return this.motif
    }

    
}