import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../core/product';
import { ConsumerProductService } from '../services/consumer-product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  product:Product=new Product();
  constructor(private activatedRoute:ActivatedRoute,private consumer:ConsumerProductService) { }

  ngOnInit(): void {
    this.consumer.getProductById(this.activatedRoute.snapshot.params['id'])
    .subscribe((data)=>this.product=data)
  }

}
