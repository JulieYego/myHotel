import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoomsComponent } from './rooms/rooms.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RoomsListComponent } from './rooms/rooms-list/rooms-list.component';
import { HeaderComponent } from './header/header.component';
import { ContainerComponent } from './container/container.component';
import { EmployeeComponent } from './employee/employee.component';
import { APP_CONFIG, APP_SERVICE_CONFIG } from './AppConfig/appconfig.service';
import { RequestInterceptor } from './request.interceptor';
import { InitService } from './init.service';
import { AppNavComponent } from './app-nav/app-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { NotFoundComponent } from './not-found/not-found.component';
import { RoomBookingComponent } from './rooms/room-booking/room-booking.component';
import { RoomsAddComponent } from './rooms/rooms-add/rooms-add.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HoverDirective } from './hover.directive';
import { EmailvalidatorDirective } from './emailValidator/emailvalidator.directive';
import { BookingModule } from './booking/booking.module';
import { RouteConfigToken } from './services/routeConfig.service';

function initFactory(initService : InitService){
  return () => initService.init()
}

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    EmployeeComponent,
    AppNavComponent,
    NotFoundComponent,
    LoginComponent,
    HoverDirective,
    EmailvalidatorDirective,
  ],
  imports: [
    BrowserModule,
    //RoomsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FormsModule,
    BookingModule,
  ],
  providers: [
    {
      provide : APP_SERVICE_CONFIG,
      useValue : APP_CONFIG 
    },
    {
      provide : RouteConfigToken,
      useValue : {title : 'Home'} 
    },
    {
      provide : HTTP_INTERCEPTORS,
      useClass: RequestInterceptor,
      multi: true
    },
    {
      provide : APP_INITIALIZER,
      useFactory: initFactory,
      deps : [InitService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
