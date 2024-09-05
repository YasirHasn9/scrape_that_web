// puppteer is a promise based library, so we need to use async/await to handle the browser instance
// we either launch or connect to exiting browser using puppeteer

import { locator } from "./pageInteraction/locator"
import { waitForSelector } from "./pageInteraction/waitForSelector"
import { fullPageScreenShot } from "./pageInteraction/screenShot"

(async () => {
    /** Page Interaction **/
    // locator()
    // waitForSelector()
    fullPageScreenShot()
})()