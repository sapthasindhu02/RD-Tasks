import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserlistComponent } from './userlist/userlist.component';
import { UserModule } from '../user/user.module';



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
  ]
})
export class UserlistModule implements OnInit{
  constructor(){}
  ngOnInit(): void {
      
  }
 }
