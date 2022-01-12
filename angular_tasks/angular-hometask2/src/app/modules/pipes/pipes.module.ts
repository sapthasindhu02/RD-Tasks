import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullNamePipe } from './fullName/full-name.pipe';
import { ActivationPipe } from './activation/activation.pipe';



@NgModule({
  declarations: [
    FullNamePipe,
    ActivationPipe
  ],
  imports: [
    CommonModule
  ],
  exports:[
    FullNamePipe,
    ActivationPipe
  ]
})
export class PipesModule { }
