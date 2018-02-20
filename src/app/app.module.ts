import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http'

import {AppComponent} from './app.component';
import {LoginFormComponent} from './login-form/login-form.component';
import {LoginService} from './login.service';
import {BoardService} from './board.service';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { LaneContainerComponent } from './lane-container/lane-container.component';
import { BoardViewComponent } from './board-view/board-view.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    TopMenuComponent,
    LaneContainerComponent,
    BoardViewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [LoginService, BoardService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
