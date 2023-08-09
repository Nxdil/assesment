import { UnixTimestampToDateAndTimePipe } from './unix-timestamp-to-date-and-time.pipe';

describe('UnixTimestampToDateAndTimePipe', () => {
  it('create an instance', () => {
    const pipe = new UnixTimestampToDateAndTimePipe();
    expect(pipe).toBeTruthy();
  });
});
