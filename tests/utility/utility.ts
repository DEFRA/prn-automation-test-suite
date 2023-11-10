import { expect, Page, type Locator } from '@playwright/test';

export default class Utility
{
    //common methods can be added here.
    //potentially can wrap them in a try catch in the future
    static async hasTitle(page: any, text: string)
    {
        await expect(page).toHaveTitle(text);
    }

    static async hasPageHeading(locator: any)
    {
        await expect(locator).toBeVisible();
    }

    static async clickElement(element)
    {
        await element.click();
    }

    static async clickBrowserBackButton(page)
    {
        await page.goBack();
        await page.waitForLoadState();
    }

    static async enterText(element, text)
    {
        await element.fill(text);
    }

    static async hoverOverElement(element) 
    {
        await element.hover();  
    }
    //this could be refactored into any keyboard press in the future
    static async pressEnter(page)
    {
        await page.keyboard.press('Enter');
    }

    static async scrollIntoView(elementToScrollWithin, elementToFind)
    {
        while(!(await elementToFind.isVisible()))
        {
            await elementToScrollWithin.scrollIntoView();       
        }
    }

    static async clickBrowserForwardButton(page)
    {
        await page.goForward();
        await page.waitForLoadState();
    }

    static async refreshPage(page)
    {
        await page.reload();
        await page.waitForLoadState();
    }

    static async expectAllAreVisible(items: Locator)
    {       
        const count = await items.count();
        for (let _i = 0; _i < count; _i++)
        {
            await expect(items.nth(_i)).toBeVisible();      
        }  
    }

    static async checkHeadingHasData(element, page)
    {
        const sibling = await page.locator(`//h2[contains(text(), "${await element.innerText()}")]/following-sibling::div`).first();
        await expect(sibling).toHaveText(/.+/);
    }

    static async valueExistsInArray(array: [], key: string, value: string) 
    {
        return array.some(function (el) {
          return el[key] === value;
        });
    }
      
    static async removeItemsFromArray(arrayToFilter: string[], itemsToRemove: string[])
    {
        itemsToRemove.forEach((itemToRemove) => {
          arrayToFilter = arrayToFilter.filter((arrayItem) => arrayItem !== itemToRemove);
        });
      
        return arrayToFilter;
    }   
}