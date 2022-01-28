import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';
import { IonicStorageModule } from '@ionic/storage-angular';
import { Drivers } from '@ionic/storage';
import { FormBuilder , Validators, FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,HttpClientModule,ReactiveFormsModule,AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,IonicStorageModule.forRoot({
      name: 'MyLocations',
      driverOrder: [Drivers.IndexedDB,'sqlite','websql']
    })],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },Geolocation,NativeStorage,IonicStorageModule,FormBuilder , Validators, FormControl,ReactiveFormsModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
