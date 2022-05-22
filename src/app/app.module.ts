import { NgModule } from '@angular/core';
import { NesModule } from 'ngx-nes-css';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { UiModule } from "./ui/ui.module";
import { NftComponent } from './ui/nft/nft.component';

@NgModule({
  declarations: [
    AppComponent,
    NftComponent
  ],
  imports: [
    AppRoutingModule,
    NesModule,
    BrowserModule,
    BrowserAnimationsModule,
    UiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
