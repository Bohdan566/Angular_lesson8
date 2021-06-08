import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private data = new BehaviorSubject<number>(0);

  constructor() { }

  getCurrentState(): BehaviorSubject<number>{
    return this.data;
  }

  setNewState(): void{
    this.data.next(this.data.getValue() + 1);
  }
}
