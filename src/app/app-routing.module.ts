import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MountainComponent } from './components/mountain/mountain.component';
import { MrtComponent } from './components/examples/mrt/mrt.component';
import { UdfpowerComponent } from './components/examples/udfpower/udfpower.component';
import { MyMessageBoardComponent } from './components/examples/my-message-board/my-message-board.component';
import { MountainDetailComponent } from './components/mountain-detail/mountain-detail.component';
import { RandomDogComponent } from './components/examples/random-dog/random-dog.component';


const routes: Routes = [
  // { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'mountains', component: MountainComponent },
  { path: 'examples/mrt', component: MrtComponent },
  { path: 'examples/power', component: UdfpowerComponent },
  { path: 'examples/board', component: MyMessageBoardComponent },
  { path: 'examples/dog', component: RandomDogComponent },
  { path: 'detail/:pid', component: MountainDetailComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
