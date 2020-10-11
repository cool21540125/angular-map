import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MountainComponent } from './components/mountain/mountain.component';
import { MountainDetailComponent } from './components/mountain-detail/mountain-detail.component';


const routes: Routes = [
  // { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'mountains', component: MountainComponent },
  { path: 'detail/:pid', component: MountainDetailComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
