import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { OperationListComponent } from './operation-list.component';
import { OperationModule } from '../operation/operation.module';



@NgModule({
  declarations: [
    OperationListComponent
  ],
  imports: [
    SharedModule,
    OperationModule
  ], 
  exports:[
    OperationListComponent
  ]
})
export class OperationListModule { }
