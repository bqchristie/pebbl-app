import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {LoginFormComponent} from './login-form/login-form.component';
import {LoginService} from './login.service';
import { TopMenuComponent } from './top-menu/top-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    TopMenuComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
