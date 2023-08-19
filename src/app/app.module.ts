import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactusComponent } from './contactus/contactus.component';
import { SearchComponent } from './search/search.component';
import { ServicesComponent } from './services/services.component';

import { FormsModule } from '@angular/forms';
import { ImageResultComponent } from './image-result/image-result.component';
import { DataService } from './data.service';
import { HttpClientModule } from '@angular/common/http';
import { ViewImageComponent } from './view-image/view-image.component';
import { SingleViewImageComponent } from './single-view-image/single-view-image.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactusComponent,
    SearchComponent,
    ServicesComponent,
    ImageResultComponent,
    ViewImageComponent,
    SingleViewImageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
