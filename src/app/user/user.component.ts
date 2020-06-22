import { Component, OnInit, Injectable } from '@angular/core';
import { UserService } from '../user-service';



@Component({  
  selector: 'app-user',
  templateUrl:'./user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {

  username:string;
  user:any=[]
  repository:any=[]

  constructor(private userservice:UserService) {}

  ngOnInit(){}

  search(){    
      this.userservice.changeUserNames(this.username);
        this.userservice.getUser().subscribe(user => {
          this.user = user;
        });
        this.userservice.getRepo().subscribe(repository => {
          this.repository = repository;
        });
    }
  }
  