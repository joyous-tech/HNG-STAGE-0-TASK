// Function to display current time in UTC
function displayCurrentTimeUTC() {
    const now = new Date();
    const utcTime = now.toUTCString();
    document.getElementById('currentTime').textContent = utcTime;
  }
  
  // Update the time every second
  setInterval(displayCurrentTimeUTC, 1000);
  
  // Initialize the time display
  displayCurrentTimeUTC();