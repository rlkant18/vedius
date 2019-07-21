import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BackendService {


  constructor() { }

  getCartTotal(){
    let fakeresponse = "10";
    return Observable.create(
      observer => {
        setTimeout(() => {
          observer.next(fakeresponse)
        }, 2000)
      }
    )
  }

  getUserStatus(){
    let fakeresponse = "true";
    return Observable.create(
      observer => {
        setTimeout(() => {
          observer.next(fakeresponse)
        }, 2000)
      }
    )
  }

  getproducts(collType){
    let fakeresponse = [{
      'category': "test",
      'scategory': "Test",
      'name': "product name",
      'price': "100",
      '_id': "123456789"
    }];
    return Observable.create(
      observer => {
        setTimeout(() => {
          observer.next(fakeresponse)
        }, 2000 )
      }
    )
  }

  getFilterproducts(collType, filters){
    let fakeresponse = [{
      'category': "test",
      'scategory': "Test",
      'name': "product name",
      'price': "3000",
      '_id': "123456789"
    }];
    return Observable.create(
      observer => {
        setTimeout(() => {
          observer.next(fakeresponse)
        }, 2000)
      }
    )
  }

  setproducts(){
    let fakeresponse = "true";
    return Observable.create(
      observer => {
        setTimeout(() => {
          observer.next(fakeresponse)
        }, 2000)
      }
    )
  }

  getOneproductDoc(collType, docId){
    let fakeresponse = {
      'category': "test",
      'scategory': "Test",
      'name': "product name",
      'price': "3000",
      '_id': "123456789"
    };
    return Observable.create(
      observer => {
        setTimeout(() => {
          observer.next(fakeresponse)
        }, 2000)
      }
    )
  }

  delOneproductDoc(collType, docId){
    let fakeresponse = true;
    return Observable.create(
      observer => {
        setTimeout(() => {
          observer.next(fakeresponse)
        }, 2000)
      }
    )
  }

  updateShoppingInterest(collType, data){
    let fakeresponse = true;
    return Observable.create(
      observer => {
        setTimeout(() => {
          observer.next(fakeresponse)
        }, 2000)
      }
    )
  }

  updateShoppingCart(collType, data){
    let fakeresponse = true;
    return Observable.create(
      observer => {
        setTimeout(() => {
          observer.next(fakeresponse)
        }, 2000)
      }
    )
  }


}
