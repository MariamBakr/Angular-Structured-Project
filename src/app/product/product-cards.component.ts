import { Component } from '@angular/core';
import {  Subject} from 'rxjs';
import { LoaderService } from '../loader.service';

@Component({
  selector: 'app-product-cards',
  templateUrl: 'product-cards.component.html',
  styleUrls: ['product-cards.component.css']
})
export class ProductCardsComponent {
  isLoading:Subject<boolean>
  constructor(private loaderserv:LoaderService){
    this.isLoading=this.loaderserv.Loader
  }
}
