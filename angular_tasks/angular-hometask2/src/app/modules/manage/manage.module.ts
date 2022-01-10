import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FetchDataService } from 'src/app/services/fetch-data.service';
import { RouterModule } from '@angular/router';
import { UserlistModule } from '../userlist/userlist.module';
import { ManageComponent } from './manage/manage.component';
import { UserDetailsCardComponent } from './user-details-card/user-details-card.component';

export const manageRoutes=RouterModule.forChild([
  {path:'',
  component:ManageComponent,
  children:[
    {path:':id',component:UserDetailsCardComponent}
  ]
}
])
@NgModule({
  declarations: [
    ManageComponent,
    UserDetailsCardComponent
  ],
  imports: [
    CommonModule,
    UserlistModule,
    manageRoutes
  ],
  exports:[
    ManageComponent,
    UserDetailsCardComponent
  ],
  providers: [FetchDataService]
})
export class ManageModule implements OnInit{
  constructor(){}
  ngOnInit(): void {
      
  }
 }
