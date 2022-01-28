import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';
import { GpsService } from '../services/gps.service';

@Component({
  selector: 'app-gps',
  templateUrl: './gps.page.html',
  styleUrls: ['./gps.page.scss'],
})
export class GpsPage implements OnInit {

  constructor(private geolocation: Geolocation,private coord:GpsService) { 
    
  }

  ngOnInit() {
    this.geolocation.getCurrentPosition().then((resp) => {
      console.log(resp.coords.latitude)
      console.log(resp.coords.longitude)
      this.coord.save(resp.coords.latitude,resp.coords.longitude).then((data)=>{
        console.log(data); 
      }).catch((error)=>{
        console.log('Error setting location', error);

      })

      
     }).catch((error) => {
       console.log('Error getting location', error);
     });
  }

}
