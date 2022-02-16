import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { DairyproductsComponent } from './categories/dairyproducts/dairyproducts.component';
import { FruitsComponent } from './categories/fruits/fruits.component';
import { VegetablesComponent } from './categories/vegetables/vegetables.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
    {path:'vegetables',component:VegetablesComponent},
    {path:'fruits',component:FruitsComponent},
    {path:'dairyproducts',component:DairyproductsComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'footer',component:FooterComponent},
{path:'',redirectTo:'home',pathMatch:'full'}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
