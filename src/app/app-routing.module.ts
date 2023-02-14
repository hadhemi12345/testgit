import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { DetailsProductComponent } from './details-product/details-product.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductsComponent } from './products/products.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { UpdateProductComponent } from './update-product/update-product.component';

const routes: Routes = [
  {path:'products',component:ProductsComponent},
  {path:'addProduct',component:AddProductComponent},
  {path:'product/:id/:title',component:DetailsProductComponent},
  {path:'todo',component:TodoListComponent},
  {path:'updateProduct/:id',component:UpdateProductComponent},
  {path:'',redirectTo:'/products',pathMatch:'full'},
  {path:'**',component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
