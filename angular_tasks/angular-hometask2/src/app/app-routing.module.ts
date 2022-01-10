import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserManagementComponent } from './components/user-management/user-management.component';
import { AcTiveComponent } from './modules/active/ac-tive/ac-tive.component';
import { DelTedComponent } from './modules/deleted/del-ted/del-ted.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:UserManagementComponent},
  {path:'deleted',component:DelTedComponent},
  {path:'active',component:AcTiveComponent},
  {path:'manage',
  loadChildren: () => import("src/app/modules/manage/manage.module").then(module => module.ManageModule),
  },
  {path:'**',component:UserManagementComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
