function updateUTCTime() {
    const utcTimeElement = document.getElementById('utc-time');
    const now = new Date();
    utcTimeElement.textContent = 'UTC Time: ' + now.toUTCString();
}

updateUTCTime();
