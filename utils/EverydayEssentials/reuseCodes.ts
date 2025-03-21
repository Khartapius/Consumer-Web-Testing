import { test, expect } from "@playwright/test";
export const Location = async ({ page }) => {
  //Setting up the location
  if (
    await page
      .locator("#selectedDeliveryLocation")
      .getByText("Unknown Location")
      .isVisible()
  ) {
    await test.step('📜Clicking on "Unknown Location" text on navigation bar from hubtel home page ', async () => {
      await page
        .locator("#selectedDeliveryLocation")
        .getByText("Unknown Location")
        .click();
    });

    await test.step(' ⌛ Waiting for page to Load', async() => {
      await page.waitForTimeout(5000);
    })

    await test.step('📜 Clicking on "Circle VIP Station - Circle" from location dropdown list ', async () => {
      await page.getByText("Kubekrom - Kubekrom").click();
    });
  }
};

export const sections = async ({ page }) => {
  //Checking availability of various sections
  await expect(
    page.getByRole("heading", { name: "Trending" }),
    "Should have a heading of 'Trending'"
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Most Searched Items" }),
    "Should have a heading of 'Most Searched Items'"
  ).toBeVisible();
};
