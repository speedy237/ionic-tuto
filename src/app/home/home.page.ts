import { Component } from '@angular/core';
import { Product } from '../classes/product';
import { ProductServiceService } from '../services/product-service.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public products:Array<Product>;

  constructor(private productService:ProductServiceService) {
  }

  ionViewWillEnter(){
    this.products = this.productService.getProducts();
    //console.log(this.products);
  }

}
