import { Injectable } from '@angular/core';
import { HotkeysService, Hotkey } from 'angular2-hotkeys';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

class HotkeyConfig {
  [key: string]: string[];
}

class ConfigModel {
  hotkeys: HotkeyConfig;
}

export class Command {
  name: string;
  combo: string;
  ev: KeyboardEvent;
}

@Injectable()
export class CommandService {
  private subject: Subject<Command>;
  public command$: Observable<Command>;

  constructor(private http: HttpClient, private hotKeyService: HotkeysService) {
    this.subject = new Subject<Command>();
    this.command$ = this.subject.asObservable();

    this.http.get('assets/config.json').toPromise()
      .then(r => r as ConfigModel)
      .then(c => {
        console.log('Service: ', c)
        for (const key in c.hotkeys) {
          const commands = c.hotkeys[key];
          hotKeyService.add(new Hotkey(key, (ev, combo) =>
            this.hotKeys(ev, combo, commands)));
        }
      });
  }

  hotKeys(ev, combo, commands) {
    commands.forEach(c => {
      console.log('C: ', c);
      const command = {
        name: c,
        ev: ev,
        combo: combo
      } as Command;
      console.log('Command: ', command);
      this.subject.next(command);
    });
    return true;
  }
}
