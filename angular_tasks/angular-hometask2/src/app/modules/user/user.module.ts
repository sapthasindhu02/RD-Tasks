import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    UserComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    UserComponent
  ]
})
export class UserModule implements OnInit{
  constructor(){}
  ngOnInit(): void {
      
  }
}
