import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { OperationListModule } from '../operation-list/operation-list.module';
import { AccountComponent } from './account.component';


@NgModule({
  declarations: [
    AccountComponent
    ],
  imports: [
    SharedModule,
    OperationListModule
  ], 
  exports:[AccountComponent]
})
export class AccountModule { }
