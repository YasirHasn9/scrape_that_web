/*
Chrome extension will use this code to deal web pages.
This code will allow for this extension to capture the user's interaction with the page's content or modifying the DOM
*/

// we are gonna add event listener for the mouseup to highlight the content 
document.addEventListener("mouseup", () => {
    // console.log('Mouseup event triggered');
    // get the current selection of text 
    const selection = window.getSelection()?.toString().trim();

    if (selection) {
        // console.log('Selected text:', selection);

        if (chrome && chrome.runtime && chrome.runtime.id) {
            // console.log('Attempting to send message to background script');
            chrome.runtime.sendMessage({ action: 'textSelected', text: selection }, (response) => {
                if (chrome.runtime.lastError) {
                    console.error('Error sending message:', chrome.runtime.lastError);
                } else {
                    console.log('Message sent successfully. Response:', response);
                }
            });
        } else {
            console.warn('Chrome runtime is not available');
        }
    } else {
        console.log('No text selected');
    }
});

