import {ComponentFixture, TestBed} from '@angular/core/testing';
import {SessionListComponent} from './session-list.component';
import {DebugElement} from '@angular/core';
import {AuthService} from '../../user/auth.service';
import {DurationPipe, VoterService} from '../shared';

describe('SessionListComponent', () => {
  let mockAuthService;
  let mockVoterService;
  let fixture: ComponentFixture<SessionListComponent>;
  let component: SessionListComponent;
  let element: HTMLElement;
  let debugEl: DebugElement;
  beforeEach(() => {
    mockAuthService = {isAuthenticated: () => true, currentUser: {userName: 'joe'}};
    mockVoterService = {userHasVoted: () => true};
    TestBed.configureTestingModule({
      declarations: [
        SessionListComponent,
        DurationPipe
      ],
      providers: [
        {provide: AuthService, useValue: mockAuthService},
        {provide: VoterService, useValue: mockVoterService},
      ]
    });
    fixture = TestBed.createComponent(SessionListComponent);
    component = fixture.componentInstance;
    debugEl = fixture.debugElement;
    element = fixture.nativeElement;
  });

  describe('initial display', () => {
    it('should have correct title', () => {
      component.sessions = [
        {
          name: 'session 1',
          id: 3,
          presenter: 'Derek',
          level: 'beginner',
          duration: 1,
          abstract: 'abstract',
          voters: ['john', 'bob']
        }
      ];
      component.filterBy = 'all';
      component.sortBy = 'name';
      component.eventId = 4;
      component.ngOnChanges();

      fixture.detectChanges(); // updates the bindings

      expect(element.querySelector('[well-title]').textContent).toContain('session 1');
    });

  });

});
