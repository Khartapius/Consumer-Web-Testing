import { test, expect } from "@playwright/test";

export const makingPayments = async ({ page, SMSPay, sendMoneyPay, airtimeTopup }) => {
  if (SMSPay === true || sendMoneyPay === true || airtimeTopup === true) {
   await test.step("Making Payments for the Service", async () => {
      await test.step("🖱 Selecting Hubtel balance from the drop down", async () => {
        await page.frameLocator('#hubtel-iframe-element').getByRole("link", { name: "Hubtel Balance" }).click();
      });

      await test.step("🖱 Clicking on Pay button", async () => {
        await page.frameLocator('#hubtel-iframe-element').getByRole("button", { name: "PAY", exact: true }).click();
      });

      await test.step("⏳ Waiting for the page to load successfully", async () => {
        await page.waitForLoadState("networkidle");
      });

      await test.step('🖱 Clicking on "I have paid for this" button after waiting for 5 seconds', async () => {
        setTimeout(async function () {
          await page.getByText("I have paid for this").click();
        }, 10000);
      });
    });
  } 
};

export class PaymentOption {
  page;
  sendMoneyPay: boolean;
  SMSPay: boolean;
  airtimeTopup: boolean;
  service: string;

  constructor(page, sendMoneyPay, SMSPay, airtimeTopup, service = "Other") {
    this.page = page;
    this.sendMoneyPay = sendMoneyPay;
    this.SMSPay = SMSPay;
    this.airtimeTopup = airtimeTopup;
    this.service = service;
  }

  async checkout() {
    const mobileMoney = await this.page.locator('#hubtel-iframe-element').contentFrame().locator('label').filter({ hasText: 'Mobile Money' });
    const bankCard = await this.page.locator('#hubtel-iframe-element').contentFrame().locator('label').filter({ hasText: 'Bank Card' });
    const othersVisible = await this.page.frameLocator('#hubtel-iframe-element').getByText('Wallets', { exact: true }).click();
    if(this.service==="SMS"){
    const actualCustomerName = await this.page.locator("(//p[@class='text-muted mb-0 text-end'])[1]").textContent()
    const actualCustomerNumber = await this.page.locator("div[class='info d-flex flex-column align-items-end'] p[class='text-muted mb-0']").textContent()
    const finalName= actualCustomerName.trim()
    const finalNumber = actualCustomerNumber.trim()
    await test.step('📜Verifying if Customer Name is correct',async()=>{
    expect.soft(finalName,"🧪Customer name should be JEWEL OSAFO APPIAH").toBe("JEWEL OSAFO APPIAH");
    });
  
    
    await test.step('📜Verifying if Customer Number is correct',async()=>{
    expect.soft(finalNumber,"🧪Customer number should be 233204665047").toBe("233204665047");
    });
  }
    await test.step("🧾 Checking if  Wallet option is available", async () => {
     await test.step('🖱️Clicking on the dropdown button', async() => {
        await this.page.frameLocator('#hubtel-iframe-element').getByRole('button', { name: 'Hubtel Balance' }).click();
     })

     await test.step('🧾Checking if Hubtel Balance is available', async() => {
      if(await this.page.frameLocator('#hubtel-iframe-element').locator('#collapseSeven').getByLabel('233242126400').locator('a').filter({ hasText: 'Hubtel Balance' }).isVisible()){
        await expect(await this.page.frameLocator('#hubtel-iframe-element').locator('#collapseSeven').getByLabel('233242126400').locator('a').filter({ hasText: 'Hubtel Balance' }), `🧪Hubtel Balance should be available`).toBeVisible();
      }
     })

     await test.step('🧾Checking if G-Money is available', async() => {
      if(await this.page.frameLocator('#hubtel-iframe-element').locator('a').filter({ hasText: 'G-Money' }).isVisible()){
        await expect(this.page.frameLocator('#hubtel-iframe-element').locator('a').filter({ hasText: 'G-Money' }), `🧪G-Money should be available for ${this.service}`).toBeVisible();
      }
     })

     await test.step('🧾Checking if Zeepay is available', async() => {
      if(await this.page.frameLocator('#hubtel-iframe-element').locator('a').filter({ hasText: 'Zeepay' }).isVisible()){
        await expect(this.page.frameLocator('#hubtel-iframe-element').locator('a').filter({ hasText: 'Zeepay' }), `🧪Zeepay should be available for ${this.service}`).toBeVisible();
      }
     })
    });

    //this works for services specified in this.service

    if ((this.service = "Insurance")) {
    await  test.step(`🧾 Checking if Cash / Check is Available for  available for ${this.service}`, () => {});
      await expect(
        this.page.frameLocator('#hubtel-iframe-element').getByText("Cash / Cheque Service"),
        "🧪 'cash/cheque' should be available"
      ).toBeTruthy();
    }


    await  test.step("🧾 Checking if Mobile Money payment option is available", async function () {
      await expect(
        mobileMoney,
        "🧪 Mobile Money option should be available"
      ).toBeTruthy();
    });

    await test.step("🧾 Checking if Bank Card payment option is available", async () => {
      await expect(bankCard, "🧪 Bank card should be available").toBeTruthy();
    });

    await makingPayments({
      page: this.page,
      SMSPay: this.SMSPay,
      sendMoneyPay: this.sendMoneyPay,
      airtimeTopup: this.airtimeTopup,
    });
  }
}
