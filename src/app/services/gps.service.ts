import { Injectable } from '@angular/core';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';
import { Storage } from '@ionic/storage-angular';


@Injectable({
  providedIn: 'root'
})
export class GpsService {

  private _storage: Storage | null = null;
async init() {
    // If using, define drivers here: await this.storage.defineDriver(/*...*/);
    const storage = await this.storage.create();
    this._storage = storage;
  }
  constructor(private storage: Storage) {
    this.init();
  }

  //constructor(private nativeStorage: NativeStorage) { } 
  public save(lat ,lon ){
    return  this._storage?.set(lat, lon);
   

  }
  public get(){}

}
