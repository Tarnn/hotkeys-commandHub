import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HttpClientModule } from '@angular/common/http';

import { CommandService } from './services/command.service';
import { HotkeyModule } from 'angular2-hotkeys';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule, HotkeyModule.forRoot()
  ],
  declarations: [AppComponent, HelloComponent],
  providers: [CommandService],
  bootstrap: [AppComponent]
})
export class AppModule { }
