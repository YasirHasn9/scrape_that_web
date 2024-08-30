// import puppeteer 
// create a function called fullPageScreenShot
// initialize a browser with headless [btw, i forget what healess:Boolean means]
// create page
// direct the page to the url of the page you want to take a full screen shot 
// launch the page and then take a screen shot 



import puppeteer from "puppeteer";

export const fullPageScreenShot = async () => {
    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 100,
        defaultViewport: null
    })

    const page = await browser.newPage()

    await page.goto("https://smartapply.indeed.com/beta/indeedapply/form/review")

    await page.screenshot({
        fullPage: true,
        path: "full_page.png"
    })

    console.log("saved")
}