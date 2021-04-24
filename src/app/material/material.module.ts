import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSelectModule } from '@angular/material/select';

const components = [
  MatInputModule,
  MatButtonModule,
  MatSidenavModule,
  MatSelectModule
];

@NgModule({
  imports: [components],
  exports: [components]
})
export class MaterialModule { }
