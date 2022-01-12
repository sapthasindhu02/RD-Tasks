import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FetchDataService } from 'src/app/services/fetch-data.service';
import * as uuid from 'uuid';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  
  constructor(private fetchData:FetchDataService,private router:Router) { }

  formGroup:FormGroup;
  gotInputObj: any;
  
  ngOnInit(): void {
    this.formGroup=new FormGroup({
      firstName: new FormControl('',Validators.required),
      lastName: new FormControl('',Validators.required),
      login: new FormControl('',Validators.required),
      password: new FormControl('',Validators.required),
      age: new FormControl('',Validators.required)
      
    })
  }

  getInputFormData() {
    this.gotInputObj=this.formGroup.value;
  }
  setPropOnObj(){
    this.gotInputObj.id=uuid.v4();
    this.gotInputObj.date=new Date();;
    this.gotInputObj.isDeleted=false;
  }
  createUser() {
    this.fetchData.createUser(this.gotInputObj).subscribe({
                                                          next: (v) => console.log(v),
                                                          error: (e) => console.log(e),
                                                          complete: () => this.router.navigate(['/manage']) 
                                                        });
  }
  onSubmit() {
    this.getInputFormData();
    this.setPropOnObj();
    this.createUser();
  }

}


