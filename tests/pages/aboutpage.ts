import { expect, Page } from '@playwright/test';
import Utility from '../utility/utility';
const title: string = 'Google - About Google, our culture and company news';

export class AboutPage {
  page: Page

  constructor(page: Page) {        
      
      this.page = page;
  }

  pageHeading = () => this.page.locator('//h1[contains(text(),\'Our mission is to organise the world\'s information and make it universally accessible and useful\')]');
  viewProductsButton = () => this.page.locator('//a[contains(text(), \'View all our products\')]');

  public async verifyTitle()
  {        
    await Utility.hasTitle(this.page, title);
  }

  public async verifyPageHeading()
  {        
    await Utility.hasPageHeading(this.pageHeading());
  }
}