import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from "@angular/router";
import { Product } from './classes/product';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private ngFirestore: AngularFirestore,
    private router: Router) { }
    create(p: Product) {
      return this.ngFirestore.collection('product').add(p);
    }
  
    getProducts() {
      return this.ngFirestore.collection('product').snapshotChanges();
    }
    
    getProduct(id) {
      return this.ngFirestore.collection('product').doc(id).valueChanges();
    }
  
    updateProduct(id, p: Product) {
      this.ngFirestore.collection('product').doc(id).update(p)
        .then(() => {
          this.router.navigate(['/home']);
        }).catch(error => console.log(error));;
    }
  
    delete(id: string) {
      this.ngFirestore.doc('product/' + id).delete();
    }
}
