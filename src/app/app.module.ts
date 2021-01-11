import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AngularFileUploaderModule } from "angular-file-uploader";








import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatSliderModule,
   MatCardModule,
   MatButtonModule ,
   MatFormFieldModule,
   MatInputModule,
   MatIconModule,
   MatTabsModule,
   MatTableModule,
   MatChipsModule,
   MatAutocompleteModule,
   MatToolbarModule,
   MatSelectModule,
   
  
  
   
   
   
 } from '@angular/material';
 import {MatBadgeModule} from '@angular/material/badge';


 import { HighchartsChartModule } from 'highcharts-angular';



 import { Ac1Component } from './ac1/ac1.component';
import { NavbComponent } from './navb/navb.component';
import {HttpClientModule } from '@angular/common/http';
import { AceuilComponent } from './aceuil/aceuil.component';
import { HomeComponent } from './home/home.component';
import { ProfilComponent } from './profil/profil.component';
import { JoomlaComponent } from './joomla/joomla.component';
import { InterfaceComponent } from './interface/interface.component';




@NgModule({
  declarations: [
    AppComponent,
    Ac1Component,
    NavbComponent,
    AceuilComponent,
    HomeComponent,
    ProfilComponent,
    JoomlaComponent,
    InterfaceComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule ,
    FormsModule,
    RouterModule,
    CommonModule,
    HttpClientModule,
    AngularFileUploaderModule,
    MatBadgeModule,
  
    
  
   
    
    MatSliderModule,
   MatCardModule,
   MatButtonModule ,
   MatFormFieldModule,
   MatInputModule,
   MatIconModule,
   MatTabsModule,
   MatTableModule,
   MatChipsModule,
   MatAutocompleteModule,
   MatToolbarModule,
   MatSelectModule,
   
   HighchartsChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
