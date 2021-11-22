import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard1',
  templateUrl: './dashboard1.component.html',
  styleUrls: ['./dashboard1.component.css']
})
export class Dashboard1Component implements OnInit {

  constructor(private router:Router) { }

  gotoPage(pageName:string):void{
    this.router.navigate([`${pageName}`])
  }

  ngOnInit(): void {
  }

}
