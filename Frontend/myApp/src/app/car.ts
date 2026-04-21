import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Car {

  constructor(){}

  private carNameSubjects = new BehaviorSubject<string[]>([]);
  carNames$ = this.carNameSubjects.asObservable();

  addCarName(name:string){

    const curNames = this.carNameSubjects.getValue();
    const updNames = [...curNames, name];
    this.carNameSubjects.next(updNames);

  }

}
