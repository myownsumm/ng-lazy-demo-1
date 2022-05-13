import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ViewDataNgrxComponent } from './components/view-data-ngrx/view-data-ngrx.component';
import { TableNgrxEffects } from './state/effects';
import { tableNgrxReducer } from './state/reducer';
import { TableNgrxRoutingModule } from './table-ngrx-routing.module';

@NgModule({
  declarations: [
    ViewDataNgrxComponent
  ],
  imports: [
    CommonModule,
    TableNgrxRoutingModule,
    // kinda tricky, yeah, but we do not want to put the knowledge of NGRX into AppModule
    StoreModule.forRoot({}),
    StoreModule.forFeature('tableNgrx', tableNgrxReducer),
    EffectsModule.forRoot([]),
    EffectsModule.forFeature([TableNgrxEffects]),
    MatTableModule
  ],
  providers: [],
})
export class TableNgrxModule {
}

