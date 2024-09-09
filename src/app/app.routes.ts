import { Routes } from '@angular/router';
import { LoginComponent } from './layout/pages/login/login.component';
import { RegisterComponent } from './layout/pages/register/register.component';
import { HomeComponent } from './layout/pages/home/home.component';
import { CartComponent } from './layout/pages/cart/cart.component';
import { ProductsComponent } from './layout/pages/products/products.component';
import { CategoriesComponent } from './layout/pages/categories/categories.component';
import { BrandsComponent } from './layout/pages/brands/brands.component';
import { NotfoundComponent } from './layout/aditiones/notfound/notfound.component';
import { authGuard } from './shard/guards/auth.guard';
import { ForgetPasswordComponent } from './layout/aditiones/forget-password/forget-password.component';
import { ProductDetailsComponent } from './layout/aditiones/product-details/product-details.component';
import { ReqOrderComponent } from './layout/aditiones/req-order/req-order.component';



export const routes: Routes = [
    {path:"" ,redirectTo:"home",pathMatch:"full"},
    {path:"login" ,component:LoginComponent},
    {path:"register" ,component:RegisterComponent},
    {path:"forgetPassword" ,component:ForgetPasswordComponent},
    {path:"home" ,component:HomeComponent , canActivate : [authGuard]},
    {path:"cart", component:CartComponent , canActivate : [authGuard]},
    {path:"productDetails/:p_id", component:ProductDetailsComponent , canActivate : [authGuard]},
    {path:"products",component:ProductsComponent , canActivate : [authGuard]},
    {path:"brands" , component:BrandsComponent , canActivate : [authGuard]},
    {path:"categories" , component:CategoriesComponent , canActivate : [authGuard]},
    {path:"reqOrder/:cartId" , component:ReqOrderComponent , canActivate : [authGuard]},
    {path:"**" , component:NotfoundComponent}
    
];
