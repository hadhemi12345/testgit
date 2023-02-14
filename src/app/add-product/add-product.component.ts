import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../core/product';
import { ProductService } from '../services/product.service';
import { ConsumerProductService } from '../services/consumer-product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  product:Product=new Product();
  email!:string;
  constructor(private _productService: ProductService,private router:Router,private consumerProduct:ConsumerProductService) { }

  ngOnInit(): void {
  }

  ajouter(){
    //this._productService.addProduct(this.product)
    this.consumerProduct.addProduct(this.product).subscribe({
      next : ()=>this.router.navigateByUrl('/products'),
      error : (error)=>console.log(error)
    })
    
  }

}
