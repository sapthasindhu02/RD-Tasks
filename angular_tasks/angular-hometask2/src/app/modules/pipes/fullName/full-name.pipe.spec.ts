import { FullNamePipe } from './full-name.pipe';

describe('FullNamePipe', () => {
  let pipe: FullNamePipe;
  beforeEach(() => {
    pipe = new FullNamePipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });
  it('concatenates string', () => {
    let fullName = pipe.transform('Harry', 'Potter');
    expect(fullName).toBe('Harry Potter');
  });
});
