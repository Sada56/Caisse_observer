import { IObserver } from '../interface/IObserver';
import { Caisse } from './caisse';

export class Solde implements IObserver{
    private htmlPara : HTMLParagraphElement  
    private htmlText : HTMLParagraphElement 
  

    constructor(){
       this.htmlPara = document.querySelector("#solde-text") 
       this.htmlText = document.querySelector("#solde-state") 
       
    }


    update(data: Caisse) {
      this.htmlPara.innerText = data.getSolde().toString()
      this.htmlText.innerText = (data.getSolde() > 0)? "POSITIF" : "NÉGATIF" 
     
    }

}