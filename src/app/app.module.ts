import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MountainComponent } from './mountain/mountain.component';
import { AreaComponent } from './area/area.component';
import { MountainDetailComponent } from './mountain-detail/mountain-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    MountainComponent,
    AreaComponent,
    MountainDetailComponent
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
