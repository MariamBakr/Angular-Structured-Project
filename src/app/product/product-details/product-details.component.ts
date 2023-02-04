import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { LoaderService } from 'src/app/loader.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  isLoading:Subject<boolean>
  constructor(private loaderserv:LoaderService){
    this.isLoading=this.loaderserv.Loader}
}
