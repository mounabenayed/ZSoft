import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { OperationComponent } from './operation.component';



@NgModule({
  declarations: [
    OperationComponent
  ],
  imports: [
    SharedModule
  ], exports : [
    OperationComponent
  ]
})
export class OperationModule { }
