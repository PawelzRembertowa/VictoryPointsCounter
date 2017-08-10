import { NineAgeVictoryScorePage } from './app.po';

describe('nine-age-victory-score App', () => {
  let page: NineAgeVictoryScorePage;

  beforeEach(() => {
    page = new NineAgeVictoryScorePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
