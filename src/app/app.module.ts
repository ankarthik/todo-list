import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { NgxDnDModule } from '@swimlane/ngx-dnd';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';

import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { AppComponent, AppAddTaskComponent, ErrorHandleComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    AppAddTaskComponent,
    ErrorHandleComponent
  ],
  imports: [
    NgxDnDModule,
    NgxMaterialTimepickerModule.forRoot(),
    BrowserModule,
    HttpClientModule,
    MatListModule,
    MatIconModule,
    FormsModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatSnackBarModule,
    MatSlideToggleModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    AppAddTaskComponent,
    ErrorHandleComponent
],
})
export class AppModule { }
