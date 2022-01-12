import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserlistComponent } from './userlist/userlist.component';
import { UserModule } from '../user/user.module';
import { FetchDataService } from 'src/app/services/fetch-data.service';

@NgModule({
  declarations: [
    UserlistComponent
  ],
  imports: [
    CommonModule,
    UserModule
  ],
  exports:[
    UserlistComponent
  ],
  providers:[
    FetchDataService
  ]
})
export class UserlistModule implements OnInit{
  constructor(){}
  ngOnInit(): void {
      
  }
 }
