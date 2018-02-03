import { PebblAppPage } from './app.po';

describe('pebbl-app App', () => {
  let page: PebblAppPage;

  beforeEach(() => {
    page = new PebblAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
