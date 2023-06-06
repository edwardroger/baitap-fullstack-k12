let alertButtonClicked = false;
let alertAgainButtonClicked = false;

function updateClock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    var timeString = hours.toString().padStart(2, '0') + ':'
        + minutes.toString().padStart(2, '0') + ':'
        + seconds.toString().padStart(2, '0');

    document.getElementById('clock').textContent = timeString;

    // Check if the button is clicked and the time is 12:34:56
    if (alertButtonClicked && timeString === '23:02:00') {
        showAlert();
    }

    // Check if the "Alert Again" button is clicked and 5 minutes have passed
    if (alertAgainButtonClicked) {
        var currentTime = now.getTime();
        var alertTime = new Date(currentTime + 5 * 60 * 1000); // Add 5 minutes to the current time
        var alertHour = alertTime.getHours();
        var alertMinute = alertTime.getMinutes();
        var alertSecond = alertTime.getSeconds();
        var alertTimeString = alertHour.toString().padStart(2, '0') + ':' + alertMinute.toString().padStart(2, '0') + ':' + alertSecond.toString().padStart(2, '0');

        if (timeString === alertTimeString) {
            showAlertAgain();
        }
    }
}

function showAlert() {
    alert("The time is 12:34:56!");
    document.getElementById('alertAgainButton').disabled = false;
}

function showAlertAgain() {
    alert("Alert triggered again after 5 minutes!");
}

// Update the clock every second
setInterval(updateClock, 1000);

// Add click event listener to the "Set Alert" button
document.getElementById('alertButton').addEventListener('click', function () {
    alertButtonClicked = !alertButtonClicked;
    if (alertButtonClicked) {
        alert("Alert button clicked. Now the clock will trigger an alert when it's 12:34:56.");
    } else {
        alert("alert cancel");
        document.getElementById('alertAgainButton').disabled = true;
        alertAgainButtonClicked = false;
    }
});

// Add click event listener to the "Alert Again" button
document.getElementById('alertAgainButton').addEventListener('click', function () {
    showAlertAgain();
    alertAgainButtonClicked = true;
});