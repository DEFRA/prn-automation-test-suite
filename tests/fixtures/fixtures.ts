import { test as base, expect } from '@playwright/test';
import { ApiUtility } from "../utility/apiutility";
import { Homepage } from '../pages/homepage';
import { AboutPage } from '../pages/aboutpage';
import AxeBuilder from '@axe-core/playwright';

type Fixtures = {
    axe: () => AxeBuilder;
    api: ApiUtility;
    homepage: Homepage;
    aboutpage: AboutPage;
}

export const test = base.extend<Fixtures>({
    axe: async ({ page }, use, testInfo) => {
        const axe = () => new AxeBuilder({ page })
            .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa']);
        await use(axe);
      },

    api: async({ request }, use) => {
        const api = new ApiUtility(request);
        await use(api);
    },

    homepage: async({ page }, use) => {
        await page.goto(process.env.BASEURL!); 
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