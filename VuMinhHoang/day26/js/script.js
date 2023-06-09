let alertButtonClicked = false;
let alertAgainButtonClicked = false;
let alertTime;

function updateClock() {
  var now = new Date();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();

  var timeString = hours.toString().padStart(2, '0') + ':' +
    minutes.toString().padStart(2, '0') + ':' +
    seconds.toString().padStart(2, '0');

  document.getElementById('clock').textContent = timeString;

  // Check if the button is clicked and the time is the specified alert time
  if (alertButtonClicked && timeString === alertTime) {
    showAlert();
  }

  // Check if the "Alert Again" button is clicked and 5 minutes have passed
  if (alertAgainButtonClicked) {
    var currentTime = now.getTime();
    var alertTimePlusFiveMinutes = getTimePlusFiveMinutes(alertTime);

    if (currentTime >= alertTimePlusFiveMinutes) {
      showAlertAgain();
    }
  }
}

function getTimePlusFiveMinutes(timeString) {
  var date = new Date();
  var [hours, minutes] = timeString.split(':');
  date.setHours(parseInt(hours, 10));
  date.setMinutes(parseInt(minutes, 10));
  date.setSeconds(0);
  date.setMilliseconds(0);
  date.setTime(date.getTime() + 5 * 60 * 1000); // Add 5 minutes
  return date.getTime();
}

function showAlert() {
  alert('The time is ' + alertTime + '!');
  document.getElementById('alertAgainButton').disabled = false;
}

function showAlertAgain() {
  alert('Alert triggered again after 5 minutes!');
}

// Update the clock every second
setInterval(updateClock, 1000);

// Add click event listener to the "Set Alert" button
document.getElementById('alertButton').addEventListener('click', function() {
  alertButtonClicked = !alertButtonClicked;
  if (alertButtonClicked) {
    alertTime = document.getElementById('alertTimeInput').value;
    alert('Alert button clicked. Now the clock will trigger an alert when it\'s ' + alertTime + '.');
  } else {
    alert('Alert button unclicked. The clock will no longer trigger an alert.');
    document.getElementById('alertAgainButton').disabled = true;
    alertAgainButtonClicked = false;
  }
});

// Add click event listener to the "Alert Again" button
document.getElementById('alertAgainButton').addEventListener('click', function() {
  showAlertAgain();
  alertAgainButtonClicked = true;
});