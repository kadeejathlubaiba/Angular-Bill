import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../shared/product';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-list-mob',
  templateUrl: './list-mob.component.html',
  styleUrls: ['./list-mob.component.scss']
})
export class ListMobComponent implements OnInit {
  page=1;
  filter="";
   products : Product[];
  constructor(public productService : ProductService,  private router : Router ) { }

  ngOnInit(): void {
    this.productService.getAllProductDetailsOrderByGst().subscribe(
      result =>{
        console.log(result);
        this.products=result as Product[];
      }
    )
  }

}
