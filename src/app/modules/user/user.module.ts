import { NgModule } from '@angular/core';
import { UserComponent } from './user.component';
 import { AccountListModule } from '../account-list/account-list.module';
import { SharedModule } from 'src/app/shared/shared.module';
@NgModule({
  declarations: [
    UserComponent
  ],
  imports: [
    SharedModule,
     AccountListModule
   ]
})
export class UserModule { }
