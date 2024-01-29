import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ComplaintComponent } from './complaint/complaint.component';
import { PortalComponent } from './portal/portal.component';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';

const routes: Routes = [
  {path :'', redirectTo:'home' ,pathMatch:'full'},
  {path :'login', component:LoginComponent},
  {path :'register', component:RegisterComponent},
  {path :'portal', component:PortalComponent},
  {path :'complaint', component:ComplaintComponent},
  {path :'home', component:HomeComponent},
  {path :'app', component:AppComponent},
  {path :'about', component:AboutComponent},
  {path :'contact', component:ContactComponent},
  {path :'admin', component:AdminloginComponent},

];

@NgModule({  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
