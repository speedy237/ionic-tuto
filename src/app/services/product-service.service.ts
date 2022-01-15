import { Injectable } from '@angular/core';
import { Product } from '../classes/product';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  p = new Product('Tomate','ax0910',90,'Produit consommable 200g',500);

  private products:Array<Product> = [];

  constructor() { 
    this.products.push(this.p);
  }

  public getProducts(){
    return this.products;
  }

  public addProduct(p:Product){
    this.products.push(p);
    return this.products;
  }

  private removeProduct(p: Product) {
    let index=this.products.indexOf(p);
    this.products.splice(index,1);
  }

  public getProduct(ref:string) {
    return this.products.filter(item => item.reference === ref)[0];
  }

  private updateProduct(p: Product) {
  }
}
