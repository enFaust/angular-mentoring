import { OrderByPipe } from './order-by.pipe';

describe('OrderByDatePipe', () => {
  it('create an instance', () => {
    const pipe = new OrderByPipe();
    expect(pipe).toBeTruthy();
  });
});
