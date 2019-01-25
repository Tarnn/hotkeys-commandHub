import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HotkeyModule } from 'angular2-hotkeys';

import { CommandService } from './services/command.service';

import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule, HotkeyModule.forRoot()
  ],
  declarations: [AppComponent],
  providers: [CommandService],
  bootstrap: [AppComponent]
})
export class AppModule { }
