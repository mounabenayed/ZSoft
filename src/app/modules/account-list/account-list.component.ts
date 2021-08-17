import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.scss']
})
export class AccountListComponent implements OnInit {
  @Input() accountsList: string[]= [];
  constructor(private router: Router ) { }

  ngOnInit(): void {
  }
  selectAccount(number: string){
    this.router.navigate(['/account', {  number }]);  }
}
