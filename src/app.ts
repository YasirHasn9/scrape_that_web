// import puppeteer from "puppeteer"
import puppeteer from "puppeteer"
// puppteer is a promise based library, so we need to use async/await to handle the browser instance

async function main() {

    try {

        // 1. launch a new browser instance 
        const browser = await puppeteer.launch({
            headless: false,
            slowMo: 100
        })

        // 2. create a new page 
        const page = await browser.newPage()

        // 3. navigate the page to the url
        await page.goto('https://www.google.com')

        // 4. set viewport size for the page
        await page.setViewport({
            width: 0,
            height: 0
        })

        // 5. get access to the page content 
        await page.type('.gLFyf', 'ChatGPT.com');
        await page.keyboard.press('Enter');


        // 
        // await page.screenshot({
        //     path: "screenshot.png",
        //     fullPage: true
        // })



    } catch (error) {
        console.log(">>>>>>>>>>>>. error", error)
    }


}

main()