import { X8boardNg2Page } from './app.po';

describe('x8board-ng2 App', function() {
  let page: X8boardNg2Page;

  beforeEach(() => {
    page = new X8boardNg2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
