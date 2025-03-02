import { Routes } from '@angular/router';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { authGuard } from './core/guards/auth.guard';
import { logedGuard } from './core/guards/loged.guard';
import { DetailsComponent } from './pages/details/details.component';
export const routes: Routes = [
    {path:'',redirectTo:'home',pathMatch:'full'},
    
    {path:'',component:AuthLayoutComponent,canActivate:[logedGuard],children:[
        {path:'login',loadComponent:()=>import('./pages/login/login.component').then((c)=>c.LoginComponent),title:'login' },
        {path:'register',loadComponent:()=>import("./pages/register/register.component").then((c)=>c.RegisterComponent),title:'register' },
        {path:'resetpass',loadComponent:()=>import("./pages/resetpass/resetpass.component").then((c)=>c.ResetpassComponent),title:'forgetpassword' },
    ]},
    {path:'',component:MainLayoutComponent,canActivate:[authGuard],children:[
        {path:'home',loadComponent:()=>import('./pages/home/home.component').then((c)=>c.HomeComponent),title:"home"},
        {path:'cart',loadComponent:()=>import('./pages/cart/cart.component').then((c)=>c.CartComponent),title:"cart"},
        {path:'chackout/:id',loadComponent:()=>import('./pages/chackout/chackout/chackout.component').then((c)=>c.ChackoutComponent),title:"chackout"},
        {path:'allorders',loadComponent:()=>import('./pages/allorders/allorders/allorders.component').then((c)=>c.AllordersComponent),title:"allorders"},
        {path:'products',loadComponent:()=>import('./pages/products/products.component').then((c)=>c.ProductsComponent),title:"products"},
        {path:'categorise',loadComponent:()=>import('./pages/categories/categories.component').then((c)=>c.CategoriesComponent),title:"categories"},
        {path:'brands',loadComponent:()=>import('./pages/brands/brands.component').then((c)=>c.BrandsComponent),title:"brands"},
        {path:"details/:name/:id",loadComponent:()=>import('./pages/details/details.component').then((c)=>c.DetailsComponent),title:'details'},
       //{path:'details/:id',component:DetailsComponent}, 
       // {path:'checkout'}
       {path:"**",component:NotfoundComponent,title:"notfound"}
    ]},
    


];
