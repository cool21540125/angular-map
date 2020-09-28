import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MountainComponent } from './mountain/mountain.component';


const routes: Routes = [
  { path: 'mountain', component: MountainComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
