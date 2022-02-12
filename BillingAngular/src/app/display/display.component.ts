import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Product } from '../shared/product';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {
  products : Product[];
  page=1;
  filter="";
  
  constructor(public productService : ProductService,  private router : Router, private toastr: ToastrService ) { }
  ngOnInit(): void {
    this.productService.getAllProducts().subscribe(
      result =>{
        console.log(result);
        this.products=result as Product[];
      }
    )
  
  }
  //edit 
  updproduct(id:number){
    alert(id);
    this.router.navigate(['prod',id])

  }
  //delete
  deleteprod(id:number)
  {
    if(confirm("Are you sure,you want to delete ?")){
      this.productService.deleteProduct(id).subscribe(
        response=>{
          this.productService.getAllProducts;
          this.toastr.success('single record has been deleted','ProductApp v2022');
        },
        errror=>{
          console.log("Error");
        }
      )
    }

}
}