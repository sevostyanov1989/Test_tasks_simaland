const { test, expect } = require('@playwright/test');


test("New test simaland", async ({ page }) => {
  test.setTimeout(100000);
  await page.goto('https://www.sima-land.ru/');
  await page.getByText('Войти').click()
  await page.click('input[data-testid="text-field:field"]');
  await page.fill('input[data-testid="text-field:field"]', 'qa_test@test.ru');
  await page.click('input[type="password"]');
  await page.fill('input[type="password"]', 'qa_test');
  await page.click('[data-testid="button"]')
  await page.waitForTimeout(10000)
  const outerDiv = await page.$('div[data-testid="modal:overlay"]');
  expect(outerDiv).toBe(null)
}); 
