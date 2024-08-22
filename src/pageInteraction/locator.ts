import puppeteer from 'puppeteer'


/*
Locator
- the recommended way to select an element and interact with it 
- encapsulates the information about how to select an element (means there is a lot of bs you don't need to know now but be aware)
- allows for puppeteer to automatically wait for the element to be present in the dom in the right state for action
- use locator through page.locator() or frame.locator()
*/
export const locator = async () => {
    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 100,
        defaultViewport: null
    })
    const page = await browser.newPage()

    await page.goto('https://www.google.com')
    const inputSearch = await page.locator('textarea')
    await inputSearch.fill('ChatGPT.com')
    await page.keyboard.press('Enter')

    // waiting for an element to be visible 
    // await page.locator('The name of the css selector').wait()

    // you can also filter the element by any condition
    // find the button
    // there's possibly for the page to have multiple buttons 
    // this is why we need to find the button with the condition
    await page.
        locator("button")
        .filter(btn => btn.innerText === "Whatever text you want")
        .click()

    // by default, locator settime based on the timeout of the browser
    // and TimeoutError will be thrown if the element is not found
    await page.locator('button').setTimeout(1000).click()

}