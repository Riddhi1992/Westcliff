// Create a time data function
function currentTime() {
    // Declare variables
    var d = new Date(); // Get current date
    var hr = d.getHours(); // Get current hours
    var min = d.getMinutes(); // Get current minutes
    var sec = d.getSeconds(); // Get current seconds
    var ampm; // Declare empty variable to store AM or PM
    var utchr = d.getUTCHours(); // Get current Greenwich Mean Time (GMT)
    var timeDiff; //To store time difference between GMT hour and Local hours
    var adjTimeDiff; //To store time difference converted to positive number
    var timeZone; //To store the 4 time zones (PT, MT, CT, ET)

    // Add 0 to single digits for seconds
    if (sec < 10) {
      sec = "0" + sec;
    }
    // Add 0 to single digits for minutes
    if (min < 10) {
      min = "0" + min;
    }

    // Determine AM or PM string
    if (hr == 12) {
      ampm = "PM"; // Set to PM
    } else if (hr > 12) {
      hr -= 12; // Deduct 12 from hours greater than 12 (military time)
      ampm = "PM";
    } else {
      ampm = "AM"; // Set to AM
    }

    //convert the GTM to standard time
    if (utchr > 12) {
      utchr -= 12;
    } else {
      utchr = utchr;
    }
    // subtracting the GMT from local hrs to get the time difference
    timeDiff = utchr - hr;

    // Converting time difference to positive value
    if (timeDiff < 0) {
      adjTimeDiff = -1 * timeDiff;
    } else {
      adjTimeDiff = timeDiff;
    }

    // differentiating different timezones of USA using conditions
    if (timeDiff == -4 || timeDiff == 8) {
      timeZone = "PT";
    } else if (timeDiff == -5 || timeDiff == 7) {
      timeZone = "MT";
    } else if (timeDiff == -6 || timeDiff == 6) {
      timeZone = "CT";
    } else if (timeDiff == -7 || timeDiff == 5) {
      timeZone = "ET";
    } else {
      timeZone = "GMT";
    }

    // Assemble time format to display
    var time = hr + ":" + min + ":" + sec + " " + ampm + " " + timeZone;

    // Display current local time and time zone on HTML elements
    document.getElementById("clock").innerText = time; // adding time

    // Run time data function every 1 seconds
    setInterval(currentTime, 1000); //setting timer
  }
  // Initial run of time data function
  currentTime();