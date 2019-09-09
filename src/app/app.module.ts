import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import * as $ from 'jquery';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/components/shared/header/header.component';
import { MenuComponent } from './components/components/shared/menu/menu.component';
import { ContentComponent } from './components/components/shared/content/content.component';
import { FooterComponent } from './components/components/shared/footer/footer.component';
import { SettingComponent } from './components/components/shared/setting/setting.component';
import { LoginComponent } from './components/components/login/login.component';
import Component from 'fullcalendar/Component';
import {Routes,RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import { DashboardComponent } from './components/components/dashboard/dashboard.component';
import { ClientesComponent } from './components/components/clientes/clientes.component';
import { ClienteService} from './components/components/clientes/cliente.service';
import {HttpClientModule} from '@angular/common/http';

const routes: Routes = [
  {path:'', redirectTo:'/login', pathMatch: 'full'},
  {path:'login', component :LoginComponent},
  {path:'home', component : DashboardComponent},
  {path:'**', redirectTo:'/login'}];
 

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    ContentComponent,
    FooterComponent,
    SettingComponent,
    LoginComponent,
    DashboardComponent,
    ClientesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule,
  ],
  providers: [
    ClienteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
