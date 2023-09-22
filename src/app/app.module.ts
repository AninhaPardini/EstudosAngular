import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardNewsComponent } from './card-news/card-news.component';
import { TwowayComponent } from './twoway/twoway.component';
import { CheckSampleComponent } from './check-sample/check-sample.component';
import { ForComponentComponent } from './for-component/for-component.component';
import { SwitchComponentComponent } from './switch-component/switch-component.component';
import { AttributeComponentComponent } from './attribute-component/attribute-component.component';


@NgModule({
  declarations: [
    AppComponent,
    CardNewsComponent,
    TwowayComponent,
    CheckSampleComponent,
    ForComponentComponent,
    SwitchComponentComponent,
    AttributeComponentComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
