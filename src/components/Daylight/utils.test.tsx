import {
  secToUserFriendly,
} from './utils';

describe('secToUserFriendly', () => {
  it('returns 12:34 when 45244', () => {
    expect(secToUserFriendly(45244)).toBe('12:34');
  })
  it('returns 01:02 when 3720', () => {
    expect(secToUserFriendly(3720)).toBe('01:02');
  })
  it('returns 00:00 when 0', () => {
    expect(secToUserFriendly(0)).toBe('00:00');
  })
});
