import { Caisse, Transaction } from './classes/caisse';
import { Solde } from "./classes/solde";
import { ListeTrans } from './classes/listeTrans';

const trans = new Transaction('crédit', 2500, "Aba", "Achat de produit informatique" )
const caisse = new Caisse(0)
const solde = new Solde()
const LstTrans = new ListeTrans()


caisse.subscribe(solde) 
caisse.subscribe(LstTrans)


const typeInput = document.querySelector("#type") as HTMLSelectElement
const montant = document.querySelector("#montant") as HTMLInputElement
const who = document.querySelector("#who") as HTMLInputElement
const motif = document.querySelector("#motif") as HTMLInputElement
const bouton = document.querySelector("#btn") as HTMLButtonElement
const list = document.querySelector("#lst-trans") as HTMLUListElement

bouton.addEventListener("click", (e:Event) => {
    const trans = new Transaction(typeInput.value, montant.valueAsNumber, who.value, motif.value )
    caisse.addTransaction(trans)

    let li = document.createElement("li");
    let p = document.createElement("p");
    let h4 = document.createElement("h4")
  
    p.innerText = `${typeInput.value}` + " \n  "  + `${typeInput.value}` + " de " + `${montant.value}`  + " par " + `${who.value}` + " pour le motif " + `${motif.value}`;
    li.className = typeInput.value;
    li.append(p); 
    
    li.append(h4);
    li.className = typeInput.value;
  
    list.append(li);
})

