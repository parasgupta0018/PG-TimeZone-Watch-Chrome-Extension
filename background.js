let TimeZone = 'Asia/Kolkata';
let countryCode = 'IN'

chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ TimeZone, countryCode });
    chrome.storage.sync.get("countryCode", ({ countryCode }) => {
        chrome.action.setBadgeText({ "text": countryCode.toString() })
    })
    console.log('Default country code set to %cgreen', `color: ${TimeZone}`);
});