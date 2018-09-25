import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MzNavbarModule ,MzSidenavModule ,MzDropdownModule,MzButtonModule, MzInputModule, MzIconModule, MzIconMdiModule } from 'ngx-materialize'

import { AppRoutingModule , routingComponents} from './app-routing.module';

import { HttpClientModule ,HttpClient,HttpClientJsonpModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


import { GridModule } from '@progress/kendo-angular-grid';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { GetDataService } from './get-data.service';
import { EditService } from './edit.service';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MyGridComponent } from './my-grid/my-grid.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';





@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    NavbarComponent,
    SidenavComponent,
    MyGridComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    HttpClientJsonpModule,
    ReactiveFormsModule,
    AppRoutingModule,
    GridModule,
    InputsModule,
    ButtonsModule,
    MzNavbarModule,MzButtonModule,MzInputModule,MzDropdownModule,MzIconModule,MzIconMdiModule,MzSidenavModule,
  ],
  providers: [        {
    deps: [HttpClient],
    provide: EditService,
    useFactory: (jsonp: HttpClient) => () => new EditService(jsonp)
}],
  bootstrap: [AppComponent]
})
export class AppModule { }
