import {SessionListComponent} from './session-list.component';
import {ISession} from '../shared';

describe('SessionListComponent', () => {
  let component: SessionListComponent;
  let mockAuthService;
  let mockVoterService;

  beforeEach(() => {
    component = new SessionListComponent(mockAuthService, mockVoterService);
  });

  describe('ngOnChanges', () => {
    it('should filter the sessions correctly', () => {
      component.sessions = [
        {name: 'session 1', level: 'intermediate'},
        {name: 'session 2', level: 'beginner'},
        {name: 'session 3', level: 'advanced'},
        {name: 'session 4', level: 'intermediate'},
      ] as ISession[];
      component.filterBy = 'intermediate';
      component.sortBy = 'name';

      component.ngOnChanges();

      expect(component.visibleSessions.length).toBe(2);
    });
    it('should sort the sessions correctly', () => {
      const targetSession = 'session 3';
      component.sessions = [
        {name: 'session 1', level: 'advanced'},
        {name: targetSession, level: 'intermediate'},
        {name: 'session 2', level: 'intermediate'},
      ] as ISession[];
      component.filterBy = 'all';
      component.sortBy = 'name';

      component.ngOnChanges();

      expect(component.visibleSessions[1].name).toBe(targetSession);
    });
  });
});
