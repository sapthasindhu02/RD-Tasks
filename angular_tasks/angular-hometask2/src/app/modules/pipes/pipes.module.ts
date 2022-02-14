import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullNamePipe } from './fullName/full-name.pipe';

@NgModule({
  declarations: [FullNamePipe],
  imports: [CommonModule],
  exports: [FullNamePipe],
})
export class PipesModule {}
