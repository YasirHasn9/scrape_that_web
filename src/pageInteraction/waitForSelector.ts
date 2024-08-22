/*
waitForSelector:
- is a lower level api than locator
- does not retry the action if the element is not found
- requires you to manually clean the event otherwise it will cause memory leak
*/

import puppeteer from 'puppeteer'

export async function waitForSelector() {
    // 1. launch instance of browser
    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport: null
    })

    // 2. create a new page 
    const page = await browser.newPage()

    // 3. navigate the page to the url 
    await page.goto('https://www.google.com')

    // 4. now find out what css selector you want to interact with
    const inputSearch = await page.waitForSelector('textarea')

    // 5. now wait for the element to be visible
    await inputSearch?.type('ChatGPT.com')

    await inputSearch?.dispose()

    await browser.close()
}
