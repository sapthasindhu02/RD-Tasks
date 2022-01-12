import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { RouterModule } from '@angular/router';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  declarations: [
    UserComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    PipesModule
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
