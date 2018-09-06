import { AngularMaterialExtensionsCalendarDemoPage } from './app.po';

describe('@angular-material-extensions/calendar-demo App', () => {
  let page: AngularMaterialExtensionsCalendarDemoPage;

  beforeEach(() => {
    page = new AngularMaterialExtensionsCalendarDemoPage ();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
