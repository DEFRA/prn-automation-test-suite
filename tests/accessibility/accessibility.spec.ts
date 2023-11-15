import { expect } from '@playwright/test';
import { test } from '../fixtures/fixtures';

test.describe('Accessibility Tests', () => {
  test('Verify home page', async ({ axe, page }, testInfo) => {
    await page.goto(process.env.BASEURL!);
    const accessibilityScanResults = await axe().analyze();
    expect(accessibilityScanResults.violations).toEqual([]);
  });
});