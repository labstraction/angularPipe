import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './component/list.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    ListComponent
  ]
})
export class ListModule { }
