import { ClaimfoundMockFrontendPage } from './app.po';

describe('claimfound-mock-frontend App', () => {
  let page: ClaimfoundMockFrontendPage;

  beforeEach(() => {
    page = new ClaimfoundMockFrontendPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
