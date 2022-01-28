import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductServiceService } from '../services/product-service.service';
import { FormGroup, FormBuilder } from "@angular/forms";
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.page.html',
  styleUrls: ['./update-product.page.scss'],
})
export class UpdateProductPage implements OnInit {
  editForm: FormGroup;
  id: any;

  constructor(private crudService: CrudService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    public formBuilder: FormBuilder) {
      this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.crudService.getProduct(this.id).subscribe((data) => {
      this.editForm = this.formBuilder.group({
        name: [data['name']],
        reference: [data['reference']],
        qte: [data['qte']],
        description: [data['description']],
        pu: [data['pu']]
      })
    });
     }

  ngOnInit() {
    this.editForm = this.formBuilder.group({
      name: [''],
      reference: [''],
      qte: [''],
      description: [''],
      pu: ['']
    })    

}
onSubmit() {
  this.crudService.updateProduct(this.id, this.editForm.value)
}
goBack() {
    this.router.navigate(['/home']);
}

}
