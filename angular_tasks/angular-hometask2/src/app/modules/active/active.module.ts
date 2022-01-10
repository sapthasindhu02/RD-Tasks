import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FetchDataService } from 'src/app/services/fetch-data.service';
import { RouterModule, Routes } from '@angular/router';
import { AcTiveComponent } from './ac-tive/ac-tive.component';
import { UserlistModule } from '../userlist/userlist.module';

const activeRoutes: Routes = [
  {path:'active',component:AcTiveComponent}
];


@NgModule({
  declarations: [
    AcTiveComponent
  ],
  imports: [
    CommonModule,
    UserlistModule,
    RouterModule.forChild(activeRoutes)
  ],
  exports:[
    AcTiveComponent
  ],
  providers: [FetchDataService]
})
export class ActiveModule implements OnInit{
  constructor(){}
  ngOnInit(): void {
      
  }
}
