import { Component, inject, OnDestroy, OnInit, signal, Signal, WritableSignal } from '@angular/core';
import { ProductService } from '../../core/services/product.service';
import { Iproduct } from '../../core/interfaces/iproduct';
import { CurrencyPipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { SearchPipe } from '../../core/pipes/search.pipe';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CurrencyPipe,LowerCasePipe,SearchPipe,FormsModule,RouterLink,UpperCasePipe,TitleCasePipe],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit, OnDestroy {

  private readonly _ProductService=inject(ProductService);
  name:WritableSignal<string>=signal(" ")

isLoading:WritableSignal<boolean>=signal(false)
  productsub !:Subscription; 
productsList:WritableSignal<Iproduct[]>=signal([]);
categoriesList:WritableSignal<any[]>=signal([])
ngOnInit(): void {
this.getallproduct()
this.isLoading.set(true)
this._ProductService.Getallcategories().subscribe({
  next:(res)=>{
console.log(res)
this.categoriesList.set(res)
this.isLoading.set(false)
  },
})
}
getallproduct():void{
  this.isLoading.set(true)
this.productsub=this._ProductService.getallproducts().subscribe({
    next:(res)=>{
      console.log(res)
     this.productsList.set(res)
     this.isLoading.set(false)
    },
  });
}

getspecificcategories(keyword:string):void{
  this.isLoading.set(true)
  this._ProductService.Getproductsspecificcategory(keyword).subscribe({
    next:(res)=>{
console.log(res)
this.productsList.set(res)
this.isLoading.set(false)
    },
  })
}
filterCategory(event:any):void{
let value = event.target.value
console.log(value)
if(value=="all"){
  this.getallproduct()
}else{
  this.getspecificcategories(value)
}
}

ngOnDestroy(): void {
  this.productsub?.unsubscribe() 
}
}




