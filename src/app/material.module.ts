import { NgModule } from '@angular/core';
import {  ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import { AnimateOnScrollModule } from 'ng2-animate-on-scroll';

@NgModule({
 
    imports: [
        FormsModule,
        BrowserModule,
        FlexLayoutModule,
        BrowserAnimationsModule,
        MatSidenavModule,
      HttpClientModule,
      MatTabsModule,
      MatIconModule,
      IvyCarouselModule,
     ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
     AnimateOnScrollModule.forRoot(),
     MatToolbarModule,
      ReactiveFormsModule,
      AppRoutingModule,
      MatCardModule,
      MatDividerModule
      
    ],
  
    exports: [
  
        FormsModule,
        BrowserModule,
       
        FlexLayoutModule,
        BrowserAnimationsModule,
      MatTabsModule,
      HttpClientModule,
     ReactiveFormsModule,
     IvyCarouselModule,
     MatSidenavModule,
      ReactiveFormsModule,
      MatIconModule,
      AppRoutingModule,
      MatToolbarModule,
      MatCardModule,
      MatDividerModule
    ],
   
  })
  export class MaterialModule {
  }
  