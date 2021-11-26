import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ISession} from '../shared';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'create-session',
  templateUrl: './create-session.component.html',
  styles: [`
    em {
      float: right;
      color: indianred;
      padding-left: 10px;
    }

    .error input, error select, error textarea {
      background-color: #E3C3E5
    }

    .error ::-webkit-input-placeholder,
    .error ::-moz-placeholder,
    .error ::-ms-input-placeholder {
      color: #999
    }
  `]

})
export class CreateSessionComponent implements OnInit {
  @Output() saveNewSession = new EventEmitter();
  @Output() cancelAddSession = new EventEmitter();

  name: FormControl;
  presenter: FormControl;
  duration: FormControl;
  level: FormControl;
  abstract: FormControl;

  newSessionForm: FormGroup;

  ngOnInit(): void {
    this.name = new FormControl('', Validators.required);
    this.presenter = new FormControl('', Validators.required);
    this.duration = new FormControl('', Validators.required);
    this.level = new FormControl('', Validators.required);
    this.abstract = new FormControl('', [Validators.required, Validators.maxLength(400)]);

    this.newSessionForm = new FormGroup({
      name: this.name,
      presenter: this.presenter,
      duration: this.duration,
      level: this.level,
      abstract: this.abstract
    });
  }

  saveSession(sessionData: any): void {
    const session: ISession = {
      abstract: sessionData.abstract,
      duration: +sessionData.duration,
      id: undefined,
      level: sessionData.level,
      name: sessionData.name,
      presenter: sessionData.presenter,
      voters: []
    };
    console.log(session);
    this.saveNewSession.emit(session);
  }

  cancel(): void {
    this.cancelAddSession.emit();
  }
}
