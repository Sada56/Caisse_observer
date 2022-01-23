import { Caisse } from '../classes/caisse';
 
 export interface IObserver{
   update(data:Caisse)
}