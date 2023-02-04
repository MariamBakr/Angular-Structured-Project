import { Injectable } from '@angular/core';
import {Subject } from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  Loader:Subject<boolean>
  constructor() {
    this.Loader=new Subject<boolean>()
  }

  show(){
    this.Loader.next(true)
  }

  hide(){
    this.Loader.next(false)
  }
}
