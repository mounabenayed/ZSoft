import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { UserModel } from '../modules/user/user.model';
import { OperationModel } from '../modules/operation/operation.model';


@Injectable({
    providedIn: 'root',
})
export class OperationService {

    currentUser = new Subject<any>();
    constructor(private http: HttpClient) { }
    public getOperationsByAccount(accountNumber: string): Observable<OperationModel[]> {
        return this.http.get<OperationModel[]>(`https://localhost:44347/api/operation/byaccount/${accountNumber}`);
    }
    
}