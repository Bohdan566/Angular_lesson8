import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AComponent } from './components/a/a.component';
import { BComponent } from './components/b/b.component';
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    AComponent,
    BComponent
  ],
    imports: [
        BrowserModule,
        RouterModule.forRoot([{
          path: 'a', component: AComponent
        },{
          path: 'b', component: BComponent
        }])
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
