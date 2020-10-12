import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MountainComponent } from './components/mountain/mountain.component';
import { MrtComponent } from './components/examples/mrt/mrt.component';
import { UdfpowerComponent } from './components/examples/udfpower/udfpower.component';
import { MountainDetailComponent } from './components/mountain-detail/mountain-detail.component';


const routes: Routes = [
  // { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'mountains', component: MountainComponent },
  { path: 'examples/mrt', component: MrtComponent },
  { path: 'examples/power', component: UdfpowerComponent },
  { path: 'detail/:pid', component: MountainDetailComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
