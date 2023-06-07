var startTime
var audioAlarm = new Audio('./audio/alarm.mp3');
var isPlaying;

function setSelect() {
    let hour = document.getElementById('sl-hour');
    let minutes = document.getElementById('sl-minutes');
    let second = document.getElementById('sl-second');

    for (let i = 0; i <= 59; i++) {
        let addOptionMinutes = document.createElement('option');
        if (i < 10) {
            addOptionMinutes.value = `0${i}`;
            addOptionMinutes.text = `0${i}`;
        } else {
            addOptionMinutes.value = i;
            addOptionMinutes.text = i;
        }
        minutes.add(addOptionMinutes);

        let addOptionSecond = document.createElement('option');
        if (i < 10) {
            addOptionSecond.value = `0${i}`;
            addOptionSecond.text = `0${i}`;
        } else {
            addOptionSecond.value = i;
            addOptionSecond.text = i;
        }
        second.add(addOptionSecond);
    }
    for (let i = 0; i <= 23; i++) {
        let addOptionhour = document.createElement('option');
        if (i < 10) {
            addOptionhour.value = `0${i}`;
            addOptionhour.text = `0${i}`;
        } else {
            addOptionhour.value = i;
            addOptionhour.text = i;
        }
        hour.add(addOptionhour);
    }
}

function showClock() {
    clearTime();
    document.getElementsByClassName('set-time')[0].style.display = 'none';
    document.getElementById('startTimer').style.display = 'none';
    document.getElementById('pauseTimer').style.display = 'none';
    document.getElementById('restartTimer').style.display = 'none';
    document.getElementById('stopTimer').style.display = 'none';
    document.getElementById('startClock').style.display = 'block';
    document.getElementById('stopClock').style.display = 'block';
    document.getElementById('clearTime').style.display = 'block';
}

function showTimer() {
    // Đặt lại âm thanh
    audioAlarm.pause();
    isPlaying = false;
    
    // Hiển thị
    clearTime();
    document.getElementsByClassName('set-time')[0].style.display = "flex";
    setSelect();

    document.getElementById('startTimer').style.display = 'block';
    document.getElementById('startClock').style.display = 'none';
    document.getElementById('stopClock').style.display = 'none';
    document.getElementById('clearTime').style.display = 'none';
    document.getElementById('pauseTimer').style.display = 'none';
    document.getElementById('restartTimer').style.display = 'none';
    document.getElementById('stopTimer').style.display = 'none';
}

function startClock() {
    let hour = document.getElementById('hour');
    let minutes = document.getElementById('minutes');
    let second = document.getElementById('second');
    let textStart = document.getElementById('startClock');

    if (textStart.innerHTML === 'Bắt đầu') {
        textStart.innerHTML = 'Tiếp tục';
    }

    document.getElementById('startClock').style.display = 'none';
    document.getElementById('stopClock').style.display = 'block';


    startTime = setInterval(() => {
        if (+second.innerHTML === 59) {
            if (+minutes.innerHTML < 9) {
                minutes.innerHTML = `0${+minutes.innerHTML + 1}`;
            } else {
                if (+minutes.innerHTML === 59) {
                    if (+hour.innerHTML < 9) {
                        hour.innerHTML = `0${+hour.innerHTML + 1}`;
                    } else {
                        hour.innerHTML = +hour.innerHTML + 1;
                    }
                    minutes.innerHTML = '00';
                }
            }
            second.innerHTML = '00';
        } else if (+second.innerHTML < 9) {
            second.innerHTML = `0${+second.innerHTML + 1}`
        } else {
            second.innerHTML = +second.innerHTML + 1;
        }
    }, 1000);
}

function stopClock() {
    document.getElementById('startClock').style.display = 'block';
    document.getElementById('stopClock').style.display = 'none';
    clearInterval(startTime);
}

function clearTime() {
    clearInterval(startTime);
    document.getElementById('hour').innerHTML = '00';
    document.getElementById('minutes').innerHTML = '00';
    document.getElementById('second').innerHTML = '00';
    document.getElementById('startClock').innerHTML = 'Bắt đầu';
    document.getElementById('startClock').style.display = 'block';
    document.getElementById('stopClock').style.display = 'none';
}

function playTimer() {
    let hour = document.getElementById('hour');
    let minutes = document.getElementById('minutes');
    let second = document.getElementById('second');

    startTime = setInterval(() => {
        if (+second.innerHTML === 0) {
            if (+hour.innerHTML === 0 && +minutes.innerHTML === 0) {
                isPlaying = true;
                document.getElementById('pauseTimer').style.display = 'none';
                clearInterval(startTime);
                audioAlarm.addEventListener('ended', function() {
                    if (isPlaying) {
                      audioAlarm.currentTime = 0;
                      audioAlarm.play();
                    }
                  });
                audioAlarm.play();
            } else {
                if (+minutes.innerHTML === 0) {
                    if (+hour.innerHTML < 11) {
                        hour.innerHTML = `0${+hour.innerHTML - 1}`;
                    } else {
                        hour.innerHTML = +hour.innerHTML - 1;
                    }
                    minutes.innerHTML = '59';
                } else if (+minutes.innerHTML < 11) {
                    minutes.innerHTML = `0${+minutes.innerHTML - 1}`;
                } else {
                    minutes.innerHTML = +minutes.innerHTML - 1;
                }
                second.innerHTML = '59';
            }
        } else if (+second.innerHTML < 11) {
            second.innerHTML = `0${+second.innerHTML - 1}`
        } else {
            second.innerHTML = +second.innerHTML - 1;
        }
    }, 1000);
}

function startTimer() {
    let hour = document.getElementById('sl-hour');
    let minutes = document.getElementById('sl-minutes');
    let second = document.getElementById('sl-second');

    // Đặt giá trị từ select
    document.getElementById('hour').innerHTML = hour.value;
    document.getElementById('minutes').innerHTML = minutes.value;
    document.getElementById('second').innerHTML = second.value;

    // Hiển thị 
    document.getElementsByClassName('set-time')[0].style.display = 'none';
    document.getElementById('startTimer').style.display = 'none';
    document.getElementById('pauseTimer').style.display = 'block';
    document.getElementById('restartTimer').style.display = 'block';
    document.getElementById('stopTimer').style.display = 'block';

    // Đặt lại audio
    audioAlarm.pause();
    audioAlarm.currentTime = audioAlarm.duration;
    isPlaying = false;

    // Bắt đầu đếm thời gian
    pauseTimer();
    document.getElementById('pauseTimer').innerHTML = 'Tạm dừng';
    playTimer();
}

function pauseTimer() {
    let controlTimer = document.getElementById('pauseTimer');
    if (controlTimer.innerHTML === 'Tạm dừng') {
        clearInterval(startTime);
        controlTimer.innerHTML = 'Tiếp tục';
    } else {
        controlTimer.innerHTML = 'Tạm dừng';
        playTimer();
    }
}
