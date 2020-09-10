import * as ProductActions from './product.actions';

describe('Product', () => {
  it('should create an instance', () => {
    expect(new ProductActions.LoadProducts()).toBeTruthy();
  });
});
