import { Component, OnInit } from '@angular/core';
import { Product } from '../core/product';
import { ProductService } from '../services/product.service';
import { ConsumerProductService } from '../services/consumer-product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  title : string = "Welcome to products list"
  productList:Product[]=[];
  constructor(private _productService: ProductService,private consumerProduct:ConsumerProductService) { }

  ngOnInit(): void {
    //this.productList=this._productService.listService;
    this.consumerProduct.getProducts().subscribe({
      next : (data)=>this.productList = data,
      error : (error)=>console.log(error)
    })
  }

  BuyProduct(idProduct:string){
    for(let i=0;i<this.productList.length;i++){
      if(this.productList[i].id.match(idProduct)){
        this.productList[i].quantity--
      }
    }
  }

  LikeProduct(idProduct:string){
    for(let i=0;i<this.productList.length;i++){
      if(this.productList[i].id.match(idProduct)){
        this.productList[i].like++
      }
    }
  }

  Delete(id:any){
    this.consumerProduct.deleteProduct(id).subscribe({
      next : ()=>this.productList=this.productList.filter((p)=>p.id != id)
    });
  }

}
