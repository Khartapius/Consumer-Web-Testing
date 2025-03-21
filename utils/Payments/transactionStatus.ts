import { test, expect } from "@playwright/test";

export const transactionStatus = async ({ page, context }) => {

  let receiptContainer;
  let copiedContent;

  await test.step("📜 Checking for transaction status", async () => {
    const currentDate = new Date();
    const options: Intl.DateTimeFormatOptions = { day: '2-digit', month: 'short', year: 'numeric' };
    const formattedDate = currentDate.toLocaleDateString('en-US', options).replace(',', '');;

    console.log(formattedDate);


    await test.step("📜 Visiting Hubtel home page", async () => {
      await page.goto("https://hubtel.com/home")
    })
    await test.step("📜 Clicking on profile", async () => {
      await page.locator(".ms-1.d-none.d-md-inline-block").click();

    })

    await test.step("📜 Checking if user is on profile screen", async () => {

      await test.step('📜 Checking if Transactions is available', async () => {
        expect(await page.getByText("Transactions"), "🧪 Transactions dropdown button should be visible ").toBeTruthy()
      });

      await test.step("📜 Checking if Pay Small Small is available", async () => {
        expect(await page.getByText("Pay Small Small"), "🧪 Pay Small Small dropdown button should be visible ").toBeTruthy()
      })
    })

    await test.step('📜 Clicking on Transactions', async () => {
      await page.getByRole('link', { name: 'Transactions' }).click();
    });

    await test.step('📜 Verifying if user is on Transaction screen', async () => {
      expect(await page.getByRole('heading', { name: 'Transactions' }), "🧪 Heading Transaction should be visible ").toBeTruthy()
    });

    setTimeout(async () => {
      await page.reload();

    }, 5000)

    


    // await test.step('📜Checking share functionality', async () => {

      // await test.step('📜 Clicking on share button', async () => {
      //   await page.getByRole('img', { name: 'tshare' }).click()
      // });


      // await test.step('📜  Grant permissions for clipboard operations', async () => {
      //   await context.grantPermissions(['clipboard-read', 'clipboard-write']);
      // });


      // // Step to click on the copy button
      // await test.step('📜 Clicking on copy button', async () => {
      //   await page.locator(".btn.text-white.me-2.btn-outline-primary.text-primary").click();
      // });


      // await test.step('📜 Ensure the receipt URL is visible and focused', async () => {

      //   receiptContainer = await page.locator("#receiptUrl");
      //   await receiptContainer.press('End');
      // });

      // await test.step("📜 Press 'Control+c' to copy the content of the receipt URL", async () => {
      //   await receiptContainer.press('Control+c');
      // });


      // await test.step('📜 Retrieve the copied text from the clipboard', async () => {
      //   copiedContent = await page.evaluate(async () => {
      //     return await navigator.clipboard.readText();
      //   });
      // });

      // Optionally, assert that the copied content is as expected
    //   expect(copiedContent, "🧪 Verifying if the url was copied").toBeTruthy();

    //   await test.step('📜 Visiting the receipt url', async () => {
    //     await page.goto(copiedContent)
    //   });

    //   await test.step('📜 Checking if receipt url is functioning as expected', async () => {
    //     expect(await page.getByRole('heading', { name: 'MTN Mobile Money' }), "🧪 Heading MTN Mobile Money should be visible").toBeTruthy()


    //   });

    //   expect(await page.getByText('JEWEL OSAFO APPIAH'), "🧪 Customer name should be JEWEL OSAFO APPIAH").toBeTruthy()

    //   expect(await page.locator('span').filter({ hasText: 'GHS 1.00' })).toBeTruthy()
    //   expect(await page.locator("(//span[@class='status status-success'])[1]"), "🧪 Success message should be visible").toBeTruthy()

    //   expect(await page.getByText("Send MTN Mobile Money to 233542410123 (JOSHUA  BRONI)"), "🧪 Verifying the details of the receiver of the money").toBeTruthy()

    // });

    // await test.step('📜 Checking Track feature', async () => {

    //   await test.step('📜 Clicking on Track', async () => {
    //     await page.getByText("Track").click()
    //   });

    //   await test.step('📜 Checking for the heading Status', async () => {
    //     expect(page.getByRole('heading', { name: 'Status' }), "🧪 Heading Status should be available").toBeTruthy()
    //   });

    //   await test.step('📜 Checking for the presence of Sub heading Creating your order', async () => {

    //     expect(await page.getByText('Creating your order'), "🧪 Creating your order should be available").toBeTruthy()

    //     expect(await page.getByText("Your order of GHS 1.00 has been created successfully."), "🧪 Order message should be available").toBeTruthy()


    //   });

    //   await test.step('📜 Checking for the presence of Sub heading Processing your payments', async () => {

    //     expect(await page.getByText('Processing your payments'), "🧪 Processing your payments should be available").toBeTruthy()

    //     expect(await page.getByText("Success Withdrawal "), "🧪 Success Withdrawal should be visible").toBeTruthy()

    //   });

    //   await test.step('📜 Checking for the presence of Sub heading Completing your purchase', async () => {

    //     expect(await page.getByText('Completing your purchase'), "🧪 Completing your purchase sub heading should be available").toBeTruthy()

    //     expect(await page.getByText("Your purchase of GHS 1.00 has "), "🧪 completion message should be visible").toBeTruthy()

    //   });
    //   await test.step('📜 Clicking on close button', async () => {
    //     await page.getByRole('button', { name: 'Close' }).click()
    //   });

    // });

    // await test.step('📜 Checking for rate feature', async () => {

    //   await test.step('📜 Clicking on rate button', async () => {
    //     await page.getByText("Rate").click()
    //   });

    //   expect(await page.locator('#ratings').getByRole('heading', { name: 'MTN Mobile Money' }), "🧪 Heading MTN Mobile Money should be visible").toBeTruthy()
    //   expect(await page.getByText('How was your experience?'), "🧪 How was your experience? should be visible").toBeTruthy()

    //   await test.step('🖱 Clicking on Great emoji', async () => {
    //     await page.getByText('Great')
    //   });

    //   await test.step('📜 Entering additional message ', async () => {
    //     await page.getByPlaceholder('Add a message').fill("This is QA Test")

    //   });

    //   await test.step('📜 Clicking on Send icon', async () => {
    //     await page.getByRole('button', { name: 'Send' }).click()
    //   });

    // });

    // await test.step('📜 Verifying send button feature', async () => {

    //   await test.step('📜 Verifying ', async () => {
    //     expect(await page.getByRole('heading', { name: 'Verify your phone number' }), "🧪'Verify your phone number' heading should be visible").toBeTruthy()
    //   });

    //   await test.step('📜 Verifying the steps to obtain OTP', async () => {
    //     expect(await page.locator("Dial *713*90# with 233204665047 to see the 4-digit OTP message to log in. (Ghana only)")).toBeTruthy()
    //   });

    //   await test.step('📜 Clicking on Close button', async () => {
    //     await page.getByRole('button', { name: 'Close' }).click()
    //   });

    // });

    // await test.step('📜 Verifying Report feature', async () => {

    //   await test.step('📜 Clicking on report icon', async () => {
    //     await page.getByText('Report').click()
    //   });

    //   await test.step('📜 Verifying if Report UI loads successfully', async () => {
    //     expect(await page.getByRole('heading', { name: 'Tell us what happened' }), "🧪 Tell us what happened should be visible").toBeTruthy()

    //   });

    //   await test.step('📜 Verifying if there are suggested messages.', async () => {
    //     expect(await page.getByText("Transaction was successful but I didn't receive the right item(s)/service."), "🧪 ").toBeTruthy()
    //   });

    //   await test.step('📜Verifying if Other is present', async () => {
    //     expect(await page.getByText("Other"), "🧪 Other should be visible").toBeTruthy()
    //   });
    //   await test.step('📜 Clicking on Close button', async () => {
    //     await page.getByRole('button', { name: 'Close' }).click()
    //   });
    // });
  })

}