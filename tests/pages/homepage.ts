import { expect, Page } from '@playwright/test';
import Utility from '../utility/utility';
const title: string = 'Google';

export class Homepage {

  page: Page

  constructor(page: Page) {        
      
      this.page = page;
  }

  pageHeading = () => this.page.locator('//a[contains(text(), \''+ title + '\')]');

  public async verifyTitle()
  {        
    await Utility.hasTitle(this.page, title);
  }

  public async verifyPageHeading()
  {        
    await Utility.hasPageHeading(this.pageHeading());
  }
}