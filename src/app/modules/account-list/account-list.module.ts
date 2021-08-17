import { NgModule } from '@angular/core';
import { AccountListComponent } from './account-list.component';
import { AccountModule } from '../account/account.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    AccountListComponent
  ],
  imports: [
    SharedModule,
    AccountModule
  ], 
  exports:[
    AccountListComponent
  ]
})
export class AccountListModule { }
