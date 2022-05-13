import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewDataNgxsComponent } from './components/view-data-ngxs/view-data-ngxs.component';

const routes: Routes = [
  {
    path: '',
    component: ViewDataNgxsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TableNgxsRoutingModule {
}
