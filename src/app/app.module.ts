import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {LoginFormComponent} from './login-form/login-form.component';
import {LoginService} from './login.service';
import {ListService} from './list.service';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { LaneContainerComponent } from './lane-container/lane-container.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    TopMenuComponent,
    LaneContainerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [LoginService, ListService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
