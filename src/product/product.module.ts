import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule, Routes } from '@angular/router';
import { ProductCardsComponent } from './product-cards.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { SharedModule } from '../shared/shared.module';
import { AppModule } from "../app.module";



let ProductRoutes:Routes=[
  {path:'',redirectTo:'product/product-cards',pathMatch:'full'},
  {path:'product-cards',component:ProductCardsComponent},
  {path:'product-details/:id',component:ProductDetailsComponent}
]

@NgModule({
    declarations: [
        ProductDetailsComponent
    ],
    exports: [RouterModule],
    imports: [
        CommonModule,
        SharedModule,
        RouterModule.forChild(ProductRoutes),
        AppModule,
    ]
})
export class ProductModule { }
