import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import  {DashboardComponent} from './components/dashboard/dashboard.component'
import { HomeComponent } from './components/home/home.component'; 
import { WalletsComponent } from './components/wallets/wallets.component';

const routes: Routes = [
  {path:'dashboard',component:DashboardComponent},
  {path:"",component:HomeComponent},
  {path:"wallets",component:WalletsComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
