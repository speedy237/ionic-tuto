import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from '../classes/product';
import { CrudService } from '../crud.service';
import { ProductServiceService } from '../services/product-service.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.page.html',
  styleUrls: ['./new-product.page.scss'],
})
export class NewProductPage implements OnInit {
  new_product_form: FormGroup;

  constructor(private productService:ProductServiceService, private router:Router,private crudService: CrudService) { }

  ngOnInit() {
      //Validation du formulaire
  }

  createProduct(p:Product){
    let ss = this.productService.addProduct(p);
    let a=this.crudService.create(p);
    console.log(a);
    this.router.navigateByUrl('/home');
  }

}
