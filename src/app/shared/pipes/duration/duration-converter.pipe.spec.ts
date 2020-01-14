import { DurationConverterPipe } from './duration-converter.pipe';

describe('DurationConverterPipe', () => {
  it('create an instance', () => {
    const pipe = new DurationConverterPipe();
    expect(pipe).toBeTruthy();
  });

  it('transform to hours', () => {
    const pipe = new DurationConverterPipe();
    expect(pipe.transform(120)).toContain('2h')
  });

  it('transform to minutes', () => {
    const pipe = new DurationConverterPipe();
    expect(pipe.transform(20)).toContain('20min')
  });

  it('transform to hours and minutes', () => {
    const pipe = new DurationConverterPipe();
    expect(pipe.transform(122)).toContain('2h 2min')
  });
});
