/*
This will handle the tasks for the extention.

On chrome runtime there's an object/function called onMessage. 
We are gonna add an addListener.
This function will be a function that will take a call back function as it is one parameter.

The callback function will three parameters (requesnt, sender, sendResponse)

on the request, we are gonna find all the content we want or we get from the user's interaction. In our case, it will come from the `content.ts`.
In this function we are gonna pass the content to the server 
* TODO: Build the server
*/

chrome.runtime.onInstalled.addListener(() => {
    console.log('Extension installed');
});


// // Add a listener for messages from the background script
// chrome.runtime.onMessage.addListener((message, _sender, sendResponse) => {
//     console.log('Message received in content script:', message);
//     sendResponse({ received: true });
// });


// listens for the messages from the content scripts
chrome.runtime.onMessage.addListener((msg, _sender, response) => {
    if (msg.action === 'textSelected') {
        console.log('Text selected:', msg.text);
        // Process the selected text here
        response({ status: 'Text received' });
    }
    return true // indicates the response will be sent asynchronously
})