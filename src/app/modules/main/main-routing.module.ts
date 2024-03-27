import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';


const routes: Routes = [
  {
    path: '',
    // canActivate: [AuthGuard],
    // canActivateChild:[MychildguardsGuard],
    component: MainComponent,
    children: [
      {
        path: 'dashboard',
        // canActivate: [AuthGuard],
        // canActivate: [AuthGuard],
        // canActivateChild:[MychildguardsGuard],
        loadChildren: () => import('../dashboard/dashboard.module').then((m) => m.DashboardModule),

      },
      {
        path: 'userlist',
        loadChildren: () => import('../user/user.module').then((m) => m.UserModule),
        
        
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule { }
