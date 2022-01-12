import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FetchDataService } from 'src/app/services/fetch-data.service';
import { authTrigger } from '../manage.module';

@Component({
  selector: 'app-authenticate-user',
  templateUrl: './authenticate-user.component.html',
  styleUrls: ['./authenticate-user.component.css']
})
export class AuthenticateUserComponent implements OnInit {

  formGroup:FormGroup;
  user_arr: any;
  loginCred: any;
  ID: any;
  invalidCred:boolean=false;
  authorizePageOn: boolean;
  editThisUser: any;

  constructor(private fetchData:FetchDataService,activeRoute:ActivatedRoute,private router:Router) { 
    this.user_arr=this.fetchData.userArr;
    this.authorizePageOn=authTrigger;
    activeRoute.params.subscribe((params:any)=>{
      this.ID=params["id"];
    });
  }

  ngOnInit(): void {
    this.formGroup=new FormGroup({
      login: new FormControl('',Validators.required),
      password: new FormControl('',Validators.required)
    })
  }

  getInputFormData(){
    this.loginCred=this.formGroup.value;
  }
  getUserArr() {
    this.fetchData.getUsers().subscribe(data=>{
      this.user_arr=data;
    });
  }
  verifyUser(){
    for(let user of this.user_arr){
      if(user.id===this.ID){
        this.editThisUser=user;
        if(this.loginCred.login===user.login && this.loginCred.password===user.password)
          {
            this.authorizePageOn=false;
            return;
          }
          else{
            this.invalidCred=true;
            return;
          }
        }
  }
}
  onSubmit(){
    this.getInputFormData();
    this.getUserArr();
    this.verifyUser();
    }

}
