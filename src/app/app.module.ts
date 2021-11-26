import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { WalletsComponent } from './components/wallets/wallets.component';
import { Dashboard1Component } from './components/dashboard1/dashboard1.component';
import {SidebarModule} from 'primeng/sidebar';
import {ButtonModule} from 'primeng/button';
import { CurrencyconverterComponent } from './components/currencyconverter/currencyconverter.component';
import { TransactionsComponent } from './components/transactions/transactions.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { DepositpageComponent } from './components/depositpage/depositpage.component';
import { WithdrawalpageComponent } from './components/withdrawalpage/withdrawalpage.component';
import { ErrorpageComponent } from './components/errorpage/errorpage.component';
import { AdmindashboardComponent } from './components/admindashboard/admindashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HomeComponent,
    DashboardComponent,
    WalletsComponent,
    Dashboard1Component,
    CurrencyconverterComponent,
    TransactionsComponent,
    LoginComponent,
    RegisterComponent,
    ForgotpasswordComponent,
    DepositpageComponent,
    WithdrawalpageComponent,
    ErrorpageComponent,
    AdmindashboardComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SidebarModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
