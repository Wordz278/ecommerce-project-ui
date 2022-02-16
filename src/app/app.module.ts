import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CustomFormsModule } from 'ng2-validation';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { BoardUserComponent } from './admin/board-user/board-user.component';
import { BoardAdminComponent } from './admin/board-admin/board-admin.component';
import { BoardSuperComponent } from './admin/board-super/board-super.component';
import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { FormsModule } from '@angular/forms';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { AdminFormComponent } from './admin/admin-form/admin-form.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CategoryComponent } from './category/category.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import { ProductFilterComponent } from './product-filter/product-filter.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductImageFormComponent } from './admin/product-image-form/product-image-form.component';
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    HomeComponent,
    BoardUserComponent,
    BoardAdminComponent,
    BoardSuperComponent,
    ProductFormComponent,
    AdminFormComponent,
    CategoryComponent,
    PasswordResetComponent,
    ProductFilterComponent,
    ProductCardComponent,
    ProductImageFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    CustomFormsModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
