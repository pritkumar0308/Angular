import { Component } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-time-record-get-save',
  templateUrl: './time-record-get-save.html',
  styleUrls: ['./time-record-get-save.css']
})
export class ProductListComponent {
  products = products;

  share() {
    window.alert('The product has been shared!');
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/