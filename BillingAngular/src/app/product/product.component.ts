import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductService} from '../shared/product.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
 Id=0;
 form:NgForm;

  constructor(public productService : ProductService,private route : ActivatedRoute,
    private toastr: ToastrService) { }
  ngOnInit(): void {
    //for update
        //get empId from activate route
        this.Id=this.route.snapshot.params['Id']
    
    
        //get client by Id
        if(this.Id !=0 || this.Id != null)
        {
          //get employee
          this.productService. getProductById(this.Id).subscribe
          (
            result => {
              console.log(result);
              //assign this result to clientService formdata
              this.productService.formData=Object.assign({},result);
            },
            error => {
              console.log(error)
            }
          );
        }
  }
  onSubmit(form:NgForm){
    console.log(form.value);
    let addId = this.productService.formData.ProductCode;
  
  
  //insert or update
  if(addId == 0 || addId == null){
    //insert
    this.insertProductRecord(form);
  }else{
  //update
  this.updateProductRecord(form);
  }
  }

insertProductRecord(form? : NgForm)
{
console.log("inserting a record");
this.productService.insertProduct(form.value).subscribe
((result)=>{
  console.log(result);
  this.resetForm(form);
  this.toastr.success('Product record has been inserted','ProductApp v2022');
},
(error)=>{console.log(error);
}
);
}
updateProductRecord(form? : NgForm)
{
console.log("updating a record...");
this.productService.updateProduct(form.value).subscribe
((result)=>{
  
  console.log(result);
  //call  reset form for clean the contents
  this.resetForm(form);
 this.toastr.success('Product record has been updated','ProductApp v2022');
},
(error)=>{console.log(error);
}
);
}

resetForm(form?: NgForm){
  if (form!=null)
  {
    form.resetForm();
  }
}

}