import {ISession, VoterService} from '../shared';
import {of} from 'rxjs';

describe('VoterService', () => {
  let voterService: VoterService;
  let mockHttp;
  beforeEach(() => {
    mockHttp = jasmine.createSpyObj('mockHttp', ['delete', 'post']);
    voterService = new VoterService(mockHttp);
  });

  describe('deleteVoter', () => {
    it('should remove voter from list', () => {
      const session = {id: 6, voters: ['joe', 'john']};
      mockHttp.delete.and.returnValue(of(false));

      voterService.deleteVoter(3, session as ISession, 'joe');

      expect(session.voters.length).toBe(1);
      expect(session.voters.pop()).toBe('john');
    });

    it('should call http.delete with correct URL', () => {
      const session = {id: 6, voters: ['joe', 'john']};
      mockHttp.delete.and.returnValue(of(false));

      voterService.deleteVoter(3, session as ISession, 'joe');

      expect(mockHttp.delete).toHaveBeenCalledWith('/api/events/3/sessions/6/voters/joe');
    });
  });
  describe('addVoter', () => {
    it('should call http.post with correct URL', () => {
      const session = {id: 6, voters: ['john']};
      mockHttp.post.and.returnValue(of(false));

      voterService.addVoter(3, session as ISession, 'joe');

      expect(mockHttp.post).toHaveBeenCalledWith('/api/events/3/sessions/6/voters/joe', {}, jasmine.any(Object));
    });
  });
});
