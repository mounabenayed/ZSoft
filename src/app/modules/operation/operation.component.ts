import { Component, OnInit ,Input} from '@angular/core';
import { OperationModel } from './operation.model';

@Component({
  selector: 'app-operation',
  templateUrl: './operation.component.html',
  styleUrls: ['./operation.component.scss']
})
export class OperationComponent implements OnInit {
  @Input() operation: OperationModel | undefined ;
  
  constructor() { }

  ngOnInit(): void {
  }

}
