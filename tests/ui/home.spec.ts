import { test } from '../fixtures/fixtures';

test.beforeEach(async ({ homepage }) => {
  //await homepage.clickNavigationLink('About');
});

test.describe('Home page tests', async () => {

  test('Verify title', async ({ homepage }) => {
    await homepage.verifyTitle();
  });

  test('Verify page heading', async ({ homepage }) => {
    await homepage.verifyPageHeading();
  });
});