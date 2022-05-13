import { NgModule } from '@angular/core';
import { ViewDataNgxsComponent } from './components/view-data-ngxs/view-data-ngxs.component';
import { TableNgxsRoutingModule } from './table-ngxs-routing.module';

@NgModule({
  declarations: [
    ViewDataNgxsComponent
  ],
  imports: [
    TableNgxsRoutingModule
  ],
  providers: [],
})
export class TableNgxsModule {
}
