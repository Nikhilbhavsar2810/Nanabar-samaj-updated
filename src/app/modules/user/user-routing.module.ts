import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserlistComponent } from './components/userlist/userlist.component';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';



const userRoute: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      {
        path: '',
        component: UserlistComponent
      }
    ]

  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(userRoute)
  ],


})
export class UserRoutingModule { }
