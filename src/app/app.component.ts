import { Component, OnDestroy, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CommandService, Command } from './services/command.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  @ViewChild('toggleBtn') toggleBtnRef: ElementRef;
  showContainer: boolean = false;
  name = 'Angular';
  commands;
  subscription;

  constructor(private commandService: CommandService) {
    this.subscription = this.commandService.command$.subscribe(c => this.handleCommand(c));
  }

  handleCommand(command: Command) {
    console.log('Component => Command: ', command);
    switch (command.name) {
      case 'AppComponent.ToggleContainer': this.handleToggle(); break;
    }
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  handleToggle() {
    this.toggleBtnRef.nativeElement.click();
  }

  toggleContainer() {
    this.showContainer = !this.showContainer;
  }
}
