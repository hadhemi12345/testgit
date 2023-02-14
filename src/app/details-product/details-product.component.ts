import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details-product',
  templateUrl: './details-product.component.html',
  styleUrls: ['./details-product.component.css']
})
export class DetailsProductComponent implements OnInit {
  id!:number;
  title!:string;
  constructor(private v:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.v.snapshot.params['id'];
    this.title = this.v.snapshot.params['title']
  }

}
