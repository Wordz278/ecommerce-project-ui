import { ProductImageFormComponent } from './admin/product-image-form/product-image-form.component';
import { CategoryComponent } from './category/category.component';
import { AdminFormComponent } from './admin/admin-form/admin-form.component';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardAdminComponent } from './admin/board-admin/board-admin.component';
import { BoardSuperComponent } from './admin/board-super/board-super.component';
import { BoardUserComponent } from './admin/board-user/board-user.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
const routes: Routes = [

  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'admin/super', component: BoardSuperComponent },
  { path: 'admin/admin', component: BoardAdminComponent },
  { path: 'admin/add/admin', component:AdminFormComponent},
  { path: 'admin/add/product', component:ProductFormComponent},
  { path: 'admin/product', component:ProductImageFormComponent},
  { path: 'all/products/category/:id', component:CategoryComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
