import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { OrderUsersByRankingPipe } from './pipes/order-users-by-ranking.pipe';
import { OrderByNumberPipe } from './pipes/order-by-number.pipe';
import { OrderUsersPipe } from './pipes/order-users.pipe';
import { BlackBackgroundDirective } from './directives/black-background.directive';
import { BackgroundDirective } from './directives/background.directive';
import { ListModule } from './components/list/list.module';
import { SharedModule } from './shared/shared.module';





@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    OrderUsersByRankingPipe,
    OrderUsersPipe,
    OrderByNumberPipe,
    BlackBackgroundDirective,
    BackgroundDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ListModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
