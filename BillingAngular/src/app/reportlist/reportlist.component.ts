import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/product';
import { ProductService } from '../shared/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reportlist',
  templateUrl: './reportlist.component.html',
  styleUrls: ['./reportlist.component.scss']
})
export class ReportlistComponent implements OnInit {
 page=1;
 filter="";
  products : Product[];
  constructor(public productService : ProductService,  private router : Router ) { }
  ngOnInit(): void {
    this.productService.getAllProductDetails().subscribe(
      result =>{
        console.log(result);
        this.products=result as Product[];
      }
    )

}




}
