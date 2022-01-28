import { Component } from '@angular/core';
import { Product } from '../classes/product';
import { CrudService } from '../crud.service';
import { ProductServiceService } from '../services/product-service.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public products:Array<Product>;

  constructor(private productService:ProductServiceService,private crudService:CrudService) {
  }

  ionViewWillEnter(){
   // this.products = this.productService.getProducts();
    //this.products = this.crudService.getProducts();
    this.crudService.getProducts().subscribe((res) => {
      this.products = res.map((t) => {
        return {
          id: t.payload.doc.id,
          ...t.payload.doc.data() as Product
        };
      })
    });
    // console.log(this.products);
  }
  remove(id) {
    console.log(id)
    if (window.confirm('Are you sure?')) {
      this.crudService.delete(id);
    }
  }  

}
