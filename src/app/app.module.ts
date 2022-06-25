import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FlexLayoutModule } from '@angular/flex-layout'

import { MatSidenavModule } from '@angular/material/sidenav'
import { MatListModule } from '@angular/material/list'
import { MatTableModule } from '@angular/material/table'
import { MatRadioModule } from '@angular/material/radio'
import { MatCheckboxModule } from '@angular/material/checkbox'
import { MatExpansionModule } from '@angular/material/expansion'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { NavComponent } from './components/nav/nav.component'
import { Page1Component } from './components/page1/page1.component'
import { Page2Component } from './components/page2/page2.component'
import { Page3Component } from './components/page3/page3.component'
import { Page4Component } from './components/page4/page4.component'

import { CheckboxComponent } from './components/shared/checkbox/checkbox.component'
import { RadioButtonComponent } from './components/shared/radio-button/radio-button.component'
import { SummaryComponent } from './components/summary/summary.component'

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SummaryComponent,
    Page1Component,
    Page2Component,
    Page3Component,
    Page4Component,

    CheckboxComponent,
    RadioButtonComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule,
    MatRadioModule,
    MatCheckboxModule,
    MatExpansionModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
