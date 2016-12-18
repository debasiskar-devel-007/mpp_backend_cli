import { MppBackendPage } from './app.po';

describe('mpp-backend App', function() {
  let page: MppBackendPage;

  beforeEach(() => {
    page = new MppBackendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
