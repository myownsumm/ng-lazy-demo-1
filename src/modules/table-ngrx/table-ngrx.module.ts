import { NgModule } from '@angular/core';
import { ViewDataNgrxComponent } from './components/view-data-ngrx/view-data-ngrx.component';
import { TableNgrxRoutingModule } from './table-ngrx-routing.module';

@NgModule({
  declarations: [
    ViewDataNgrxComponent
  ],
  imports: [
    TableNgrxRoutingModule
  ],
  providers: [],
})
export class TableNgrxModule {
}

