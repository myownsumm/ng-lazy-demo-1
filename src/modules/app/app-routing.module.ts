import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { GreetingsComponent } from './components/greetings/greetings.component';

const routes: Routes = [
  {
    path: '',
    component: GreetingsComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: 'table-ngrx',
        outlet: 'left',
        loadChildren: () => import('../table-ngrx/table-ngrx.module').then(m => m.TableNgrxModule)
      },
      {
        path: 'table-ngxs',
        outlet: 'right',
        loadChildren: () => import('../table-ngxs/table-ngxs.module').then(m => m.TableNgxsModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
