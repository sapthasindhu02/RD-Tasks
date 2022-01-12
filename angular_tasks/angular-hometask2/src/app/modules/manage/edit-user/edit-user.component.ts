import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FetchDataService } from 'src/app/services/fetch-data.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  constructor(private fetchData:FetchDataService,private router:Router) { }

  @Input
  ('editThisObj') editUser:any;
  formGroup:FormGroup;
  editedDataObj: any;
  updatedUserObj: any;
  userId:any;

  ngOnInit(): void {
    this.formGroup=new FormGroup({
      password: new FormControl('',Validators.required),
      age: new FormControl('',Validators.required)
      
    })
  }

  getData(){
    this.userId=this.editUser.id;
    this.editedDataObj=this.formGroup.value;
  }
  setUserObj(){
    this.editUser.date=new Date();
    this.updatedUserObj=Object.assign(this.editUser,this.editedDataObj);
  }
  updateUser(userObj:any,id:any){
    this.fetchData.updateUserStatus(userObj,id)
                  .subscribe({
                               next: (v) => console.log(v),
                                error: (e) => console.error(e),
                                complete: () => this.router.navigate(['/manage/userDetails',id]) 
                            });
  }

  onSubmit(){
    this.getData();
    this.setUserObj();
    this.updateUser(this.updatedUserObj,this.userId);
  }
}
