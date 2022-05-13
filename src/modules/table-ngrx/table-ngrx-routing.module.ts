import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewDataNgrxComponent } from './components/view-data-ngrx/view-data-ngrx.component';

const routes: Routes = [
  {
    path: '',
    component: ViewDataNgrxComponent
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TableNgrxRoutingModule {
}
