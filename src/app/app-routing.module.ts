import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import  {DashboardComponent} from './components/dashboard/dashboard.component'
import { HomeComponent } from './components/home/home.component'; 
import { WalletsComponent } from './components/wallets/wallets.component';
import  {Dashboard1Component} from'./components/dashboard1/dashboard1.component';

const routes: Routes = [
  {path:'dashboard',component:DashboardComponent},
  {path:"",component:HomeComponent},
  {path:"wallets",component:WalletsComponent},
  {path:"dashboard1",component:Dashboard1Component} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
