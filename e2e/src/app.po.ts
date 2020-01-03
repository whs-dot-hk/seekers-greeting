import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getGreetingText() {
    return element(by.css('app-root p')).getText() as Promise<string>;
  }
}
