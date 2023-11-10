import { test as base, expect } from '@playwright/test';
import { ApiUtility } from "../utility/apiutility";
import { Homepage } from '../pages/homepage';
import { AboutPage } from '../pages/aboutpage';

type Fixtures = {
    api: ApiUtility;
    homepage: Homepage;
    aboutpage: AboutPage;
}

export const test = base.extend<Fixtures>({
    api: async({ request }, use) => {
        const api = new ApiUtility(request);
        await use(api);
    },

    homepage: async({ page, baseURL }, use) => {
        await page.goto(`${baseURL}`); 
        await page.setViewportSize({ width: 1920, height: 1080 });
        const homepage = new Homepage(page);
        expect(homepage.verifyTitle());
        await use(homepage);
    },

    aboutpage: async({ page }, use) => {
    await use(new AboutPage(page));
    }
});

export { expect } from '@playwright/test';