import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FetchDataService } from 'src/app/services/fetch-data.service';
import { RouterModule } from '@angular/router';
import { UserlistModule } from '../userlist/userlist.module';
import { ManageComponent } from './manage/manage.component';
import { UserDetailsCardComponent } from './user-details-card/user-details-card.component';
import { CreateUserComponent } from './create-user/create-user.component'
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AuthenticateUserComponent } from './authenticate-user/authenticate-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { PipesModule } from '../pipes/pipes.module';

export const authTrigger:boolean=true;
export const manageRoutes=RouterModule.forChild([
  {path:'',
  component:ManageComponent,
  children:[
    {path:'userDetails/:id',component:UserDetailsCardComponent},
    {path:'create',component:CreateUserComponent},
    {path:'auth/:id',component:AuthenticateUserComponent}
  ]
}
])
@NgModule({
  declarations: [
    ManageComponent,
    UserDetailsCardComponent,
    CreateUserComponent,
    AuthenticateUserComponent,
    EditUserComponent
  ],
  imports: [
    CommonModule,
    UserlistModule,
    ReactiveFormsModule,
    HttpClientModule,
    PipesModule,
    manageRoutes
  ],
  exports:[
    ManageComponent
  ],
  providers: [FetchDataService]
})
export class ManageModule implements OnInit{
  constructor(){}
  ngOnInit(): void {
      
  }
 }
