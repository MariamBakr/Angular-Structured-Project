import { Component } from '@angular/core';
import {Subject } from "rxjs";
import { LoaderService } from './loader.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-Lab_7';
  isLoading:Subject<boolean>
  constructor(private loaderserv:LoaderService){
    this.isLoading=this.loaderserv.Loader
  }
}
