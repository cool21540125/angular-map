import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './modules/material/material.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MountainComponent } from './components/mountain/mountain.component';
import { MountainDetailComponent } from './components/mountain-detail/mountain-detail.component';
import { MessagesComponent } from './components/messages/messages.component';
import { MrtComponent } from './components/examples/mrt/mrt.component';
import { UdfpowerComponent } from './components/examples/udfpower/udfpower.component';
import { ExponentialPipe } from './pipes/exponential.pipe';
import { RandomDogComponent } from './components/examples/random-dog/random-dog.component';

@NgModule({
  declarations: [
    AppComponent,
    MountainComponent,
    MountainDetailComponent,
    MessagesComponent,
    HeaderComponent,
    FooterComponent,
    MrtComponent,
    UdfpowerComponent,
    ExponentialPipe,
    RandomDogComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
