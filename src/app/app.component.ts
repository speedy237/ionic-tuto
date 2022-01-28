import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  Pages=[{title:'home',url:'/home',icon:'add'},{title:'Meteo',url:'/meteo',icon:'add'},{title:'Update Product',url:'/update-product',icon:'add'},{title:'new product',url:'/new-product',icon:'add'},{title:'GPS',url:'/gps',icon:'add'}]
  constructor() {}
}
