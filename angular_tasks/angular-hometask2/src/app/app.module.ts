import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserManagementComponent } from './components/user-management/user-management.component';
import { ActiveModule } from './modules/active/active.module';
import { DeletedModule } from './modules/deleted/deleted.module';
import { UserModule } from './modules/user/user.module';
import { UserlistModule } from './modules/userlist/userlist.module';
import { Pipe } from './modules/.pipe';
import { FullNamePipe } from './modules/pipes/full-name.pipe';
import { ActivationPipe } from './modules/pipes/activation.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UserManagementComponent,
    Pipe,
    FullNamePipe,
    ActivationPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DeletedModule,
    ActiveModule,
    UserModule,
    UserlistModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
