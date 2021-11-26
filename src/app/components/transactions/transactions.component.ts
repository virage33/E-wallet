import { Component, OnInit } from '@angular/core';
import  {Router} from '@angular/router'

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {

  constructor(private router:Router) { }
  gotoPage(pageName:string):void{
    this.router.navigate([`${pageName}`])
  }

  ngOnInit(): void {
  }

}
