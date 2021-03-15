let changeColor = document.getElementById("ctime");

chrome.storage.sync.get(["TimeZone", "countryCode"], ({ TimeZone, countryCode }) => {
    changeColor.style.color = 'green';
    current_time();
    setInterval(current_time, 1000);
    $('#eventsCalCountry').val(countryCode)
    chrome.action.setBadgeText({ "text": countryCode.toString() })
});

function current_time() {
    chrome.storage.sync.get("TimeZone", ({ TimeZone }) => {
        var ctime = moment().tz(TimeZone).format('LTS');
        $('#ctime').text(ctime);
    });
}


chrome.storage.onChanged.addListener(function(changes, storageName) {
    $('#eventsCalCountry').val(changes.countryCode.newValue)
    chrome.action.setBadgeText({ "text": changes.countryCode.newValue.toString() })
})