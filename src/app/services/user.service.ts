import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { UserModel } from '../modules/user/user.model';


@Injectable({
    providedIn: 'root',
})
export class UserService {

    currentUser = new Subject<any>();
    constructor(private http: HttpClient) { }
    public getCurrentUserInfo(email: string): Observable<UserModel> {
        return this.http.get<UserModel>(`https://localhost:44347/api/user/${email}`);
    }
    
}