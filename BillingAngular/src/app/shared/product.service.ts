import { Injectable } from '@angular/core';
import { Product } from './product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  formData: Product=new Product();
  products: Product[];
  constructor(private httpClient:HttpClient) { }

  //get products
  getAllProducts():Observable<any>{
  return this.httpClient.get("https://localhost:44337/api/productsC");
  }
//insert
   insertProduct(product:Product):Observable<any>
  {
  alert(environment.apiUrl+"api/productsC");
  return this.httpClient.post(environment.apiUrl+"/api/productsC",product);
  }
  getProductById(id:number):Observable<any>{
    return this.httpClient.get(environment.apiUrl+'/api/productsC/'+id);
  }
// //update
 updateProduct(product:Product):Observable<any>
 {
  alert(environment.apiUrl+"api/ProductsC");
 return this.httpClient.put(environment.apiUrl+'/api/productsC',product);
 }

 //delete
 deleteProduct(id:number)
 {
  return this.httpClient.delete(environment.apiUrl+'/api/productsC/'+id);
  
}


 //reportlisting
 getAllProductDetails():Observable<any>{
  return this.httpClient.get("https://localhost:44337/api/gstC/gst1");
  }

  //having category name=mobile
  getAllProductDetailsOrderByGst():Observable<any>{
    return this.httpClient.get("https://localhost:44337/api/gstC/gst2");
    }


//products
  bindListProducts(){
  this.httpClient.get(environment.apiUrl+'/api/productsC')
  .toPromise().then(
    response=>{
      this.products= response as Product[]
    }
  );
}
}





