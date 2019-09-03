import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import * as $ from 'jquery';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/components/shared/header/header.component';
import { MenuComponent } from './components/components/shared/menu/menu.component';
import { ContentComponent } from './components/components/shared/content/content.component';
import { FooterComponent } from './components/components/shared/footer/footer.component';
import { SettingComponent } from './components/components/shared/setting/setting.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    ContentComponent,
    FooterComponent,
    SettingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
