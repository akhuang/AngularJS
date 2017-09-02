import { GojsPage } from './app.po';

describe('gojs App', () => {
  let page: GojsPage;

  beforeEach(() => {
    page = new GojsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
