import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wallets',
  templateUrl: './wallets.component.html',
  styleUrls: ['./wallets.component.css']
})
export class WalletsComponent implements OnInit {

  constructor(private router:Router) { }
  gotoPage(pageName:string):void{
    this.router.navigate([`${pageName}`])
  }

  ngOnInit(): void {
  }

}
