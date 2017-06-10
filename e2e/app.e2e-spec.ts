import { MyangprojPage } from './app.po';

describe('myangproj App', () => {
  let page: MyangprojPage;

  beforeEach(() => {
    page = new MyangprojPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
