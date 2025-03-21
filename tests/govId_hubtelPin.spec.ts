import {test, expect} from '@playwright/test';

test.describe.configure({
    mode: 'parallel',
});

test.use({
    storageState: './utils/AuthStates/auth.json',
});


test.describe('Manage Account (Hubtel Balance PIN)', async() => {
    test('🔎Checking the Hubtel Balance PIN Section and changing the password', async({page}) => {
        await test.step('🌐Navigating to the Hubtel Balance PIN page', async() => {
            await page.goto('https://hubtel.com/profile/hubtel-balance-pin');
        })

        await test.step('⌛Waiting for the page to load', async() => {
            await page.waitForLoadState('networkidle');
        })

        await test.step('📜Checking if we are on the Hubtel Balance PIN section', async() => {
            await expect(await page.getByRole('heading', {name: 'Hubtel PIN'}),"🧪Should have a heading of Hubtel PIN").toBeVisible();
        })

        await test.step('📜Checking if the Change Pin link is available', async() => {
            await expect(await page.getByRole('link', {name: 'Change PIN'}),"🧪Should have a Change PIN link displayed").toBeVisible();
        })

        await test.step('🖱Clicking on the Change PIN link', async() => {
            await page.getByRole('link', {name: 'Change PIN'}).click();
        })

        await test.step('⌛Waiting for the page to load', async() => {
            await page.waitForLoadState('networkidle');
        })

        await test.step("📜Checking if a heading of Change PIN is displayed", async() => {
            await expect(await page.getByRole('heading', {name: 'Change PIN'}),"🧪Should have a heading of Change PIN").toBeVisible();
        })
    })
})

test.describe('Manage Account (Government ID)', async() => {
    test('🔎Checking if the Government ID has been verified', async({page}) => {
        await test.step('🌐Navigating to the Government ID section', async() => {
            await page.goto('https://hubtel.com/profile/government-id');
        })

        await test.step('⌛Waiting for the page to load', async() => {
            await page.waitForTimeout(5000);
        })

        await test.step('📜Checking if the Success image and text is displayed', async() => {
            await expect(await page.getByRole('img', { name: 'success' }),"🧪Should have the success image displayed").toBeVisible();
            await expect(await page.getByRole('heading', { name: 'Your ID has been verified' }),"🧪Should have a heading of 'Your ID has been Verified successfully!'").toBeVisible();
        })
    })
})