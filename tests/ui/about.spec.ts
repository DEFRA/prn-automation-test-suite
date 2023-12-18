import { test, expect } from '../fixtures/fixtures';

test.beforeEach(async ({ homepage }) => {
  //await homepage.clickNavigationLink('About');
});

test.describe.skip('About page tests', async () => {

  test('Verify title', async ({ aboutpage }) => {
    await aboutpage.verifyTitle();
  });

  test('Verify page heading', async ({ aboutpage }) => {
    await aboutpage.viewProductsButton().click();
    expect(aboutpage.page).toHaveURL(/.*products/)
  });
});