import { test } from '@playwright/test';

test('test browser', async ({ page }) => {
  // point this to wherever you want
  await page.goto('http://localhost:3000/');

  // keep browser open
  await page.pause();
});

//  FOR SAFARI RUN THIS COMMAND IN TERMINAL ===> npm run safari
//  FOR FIREFOX RUN THIS COMMAND IN TERMINAL ===> npm run firefox
//  FOR CHROME RUN THIS COMMAND IN TERMINAL ===> npm run chrome
