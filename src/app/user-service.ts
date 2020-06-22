import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
})

export class UserService {
    private username:string;
    private url = 'https://api.github.com/users/';

    constructor(private http:HttpClient){

    }
      
    getUser(){

        return this.http.get(this.url + this.username).pipe(map(resolve => resolve))

    }
   
    getRepo(){  

        return this.http.get(this.url + this.username + '/repos').pipe(map(resolve => resolve));
    }

    changeUserNames(username: string) {
        this.username = username;
    }
}  
