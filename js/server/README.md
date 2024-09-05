# scrape_that_web

This repository is for learning how to scrape the web.
im gonna use a library called `Puppeteer` to do that.
1. it is a js library that provide api to control chrome and firefox. It enables us to scrape the web
2. It is a headless browser. Healess means it is a browser without a gui. (graphical user interface)


More about headless browser:
---
It is a piece of software that access web pages and provide us a way to interact with them. It helps to scrape the web and extract data from it.
headless browser is a browser that runs in the background and does not have a gui.
let's say you want to know the width of a web page or an element on the web page, you can use a headless browser to do that.
Simply put, if you want to transfer date from one piece of software to another without the need of a gui, you can use a headless browser to do that.
And this is the main reason why we use headless browser to scrape the web with puppeteer.



we can use puppeteer to either launch a new browser instance or connect to an existing one.


page interaction:
1. allows to interact with the elements using mouse, keyboard inputs, and touch events.
 - find and element --->  perfrom an action on the element

2. It has locators
- the best way to select an element and interact with it.
- allows for puppeteer to automatically wait for the element to be present in the dom in the right state before an action 
- you can initiate a locator using page.locator() or frame.locator

--- note
if the locator api does not offer you the functionality I need, I can use the `page.waitForSelector()` or `ElementHandle`
