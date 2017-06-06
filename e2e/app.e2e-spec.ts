import { DcPagePage } from './app.po';

describe('dc-page App', () => {
  let page: DcPagePage;

  beforeEach(() => {
    page = new DcPagePage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
