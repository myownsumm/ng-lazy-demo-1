import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { NgxsModule } from '@ngxs/store';
import { ViewDataNgxsComponent } from './components/view-data-ngxs/view-data-ngxs.component';
import { NgxsState } from './state/state';
import { TableNgxsRoutingModule } from './table-ngxs-routing.module';

@NgModule({
  declarations: [
    ViewDataNgxsComponent
  ],
  imports: [
    CommonModule,
    TableNgxsRoutingModule,
    MatTableModule,
    // All core services set by forRoot() as in NGRX as well? not good :)
    NgxsModule.forRoot([]),
    NgxsModule.forFeature([NgxsState])
  ],
  providers: [
  ],
})
export class TableNgxsModule {
}
