import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
  exports: [
    MatTableModule,
    MatToolbarModule,
    MatSidenavModule
  ],
  providers: [],
})
export class MaterialModules { }
