import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './modules/account/account.component';
import { UserComponent} from './modules/user/user.component'
const routes: Routes = [
  { path: 'overview', component: UserComponent },
  { path: '',   redirectTo: '/overview', pathMatch: 'full' },
  { path: 'account', component: AccountComponent, pathMatch: 'full'  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
