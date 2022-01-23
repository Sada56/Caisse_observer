import { IObserver } from './IObserver';
export interface ISubject{
    subscribe(obs:IObserver)
    unsubscrible(obs:IObserver)
    notifyObservers()
}