import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FetchDataService } from 'src/app/services/fetch-data.service';
import { RouterModule, Routes } from '@angular/router';
import { DelTedComponent } from './del-ted/del-ted.component';
import { UserlistModule } from '../userlist/userlist.module';

const deletedRoutes: Routes = [
  {path:'deleted',component:DelTedComponent}
];


@NgModule({
  declarations: [DelTedComponent],
  imports: [
    CommonModule,
    UserlistModule,
    RouterModule.forChild(deletedRoutes)
  ],
  exports:[
    DelTedComponent
  ],
  providers: [FetchDataService]
})
export class DeletedModule implements OnInit{
  constructor(){}
  ngOnInit(): void {
      
  }
}
