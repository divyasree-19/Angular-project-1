import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { Component1Component } from './component1/component1.component';
import { Componet2Component } from './componet2/componet2.component';
import { Component3Component } from './component3/component3.component';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { MypipePipe } from './mypipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    Component1Component,
    Componet2Component,
    Component3Component,
    ProfileCardComponent,
    MypipePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
