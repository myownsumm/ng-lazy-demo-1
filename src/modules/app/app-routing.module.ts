import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GreetingsComponent } from './components/greetings/greetings.component';

const routes: Routes = [
  {
    path: '',
    component: GreetingsComponent
  },
  {
    path: 'table-ngrx',
    loadChildren: () => import('../table-ngrx/table-ngrx.module').then(m => m.TableNgrxModule)
  },
  {
    path: 'table-ngxs',
    loadChildren: () => import('../table-ngxs/table-ngxs.module').then(m => m.TableNgxsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
