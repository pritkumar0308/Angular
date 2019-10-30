import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }



  getDetails(){
    console.log("btn submitted..");
     return this.httpClient.get(`http://192.168.99.100:8080/records?email=aliriza.saral@gmail.com&length=10`);
  }
}
