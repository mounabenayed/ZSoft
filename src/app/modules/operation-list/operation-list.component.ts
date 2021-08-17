import { Component, Input, OnInit } from '@angular/core';
import { OperationService } from 'src/app/services/operation.service';
import { OperationModel } from '../operation/operation.model';

@Component({
  selector: 'app-operation-list',
  templateUrl: './operation-list.component.html',
  styleUrls: ['./operation-list.component.scss']
})
export class OperationListComponent implements OnInit {
  @Input() accountNumber: string  = "";
  operations: OperationModel[] | undefined;
  constructor(private operationService: OperationService) { }

  ngOnInit(): void {
    this.operationService.getOperationsByAccount(this.accountNumber).subscribe(data => {
      if (data) {
        this.operations = data;
      }
    });
  }

}
