import { Component } from '@angular/core';

import { products } from '../products';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-time-record-get-save',
  templateUrl: './time-record-get-save.component.html',
  styleUrls: ['./time-record-get-save.component.css']
})
export class ProductListComponent {
  products = products;
constructor(private httpClient: HttpClient){}
  share() {
    window.alert('The product has been shared!');
  }
  getDetails(){
    console.log("btn submitted..");
     return this.httpClient.get(`http://192.168.99.100:8080/records?email=aliriza.saral@gmail.com&length=10`);
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/