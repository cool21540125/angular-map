import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MountainComponent } from './mountain/mountain.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MountainDetailComponent } from './mountain-detail/mountain-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'mountain', component: MountainComponent },
  { path: 'detail/:pid', component: MountainDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
