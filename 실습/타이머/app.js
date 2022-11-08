const $hour = document.querySelector('#hour');
const $minute = document.querySelector('#minute');
const $second = document.querySelector('#second');
const $inputs = document.querySelectorAll('input');

const $startBtn = document.querySelector('.startBtn');
const $pauseBtn = document.querySelector('.pauseBtn');
const $resetBtn = document.querySelector('.resetBtn');

let timerId;

function fillZero(str) {
    return ('00' + str).slice(-2)
}

function getTotalTime() {
    return +$hour.value * 3600 + +$minute.value * 60 + +$second.value;
}

function checkNumber(event) {
    this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');

    if (getTotalTime() > 0) {
        activateBtns();
    }
}

function formNumber(event) {
    this.value = fillZero(this.value);
}

function initializeBtns() {
    showStartBtn();

    $startBtn.disabled = true;
    $startBtn.querySelector('img').setAttribute('src', './images/start-disabled.png');
    
    $resetBtn.disabled = true;
    $resetBtn.querySelector('img').setAttribute('src', './images/reset-disabled.png');
}

function activateBtns() {
    $startBtn.disabled = false;
    $startBtn.querySelector('img').setAttribute('src', './images/start-default.png');

    $resetBtn.disabled = false;
    $resetBtn.querySelector('img').setAttribute('src', './images/reset-default.png');
}

function showPauseBtn() {
    $pauseBtn.style.display = "inline-block";
    $startBtn.style.display = "none";
}

function showStartBtn() {
    $pauseBtn.style.display = "none";
    $startBtn.style.display = "inline-block";
}

function startTimer(event) {
    let totalTime = getTotalTime();

    showPauseBtn();

    timerId = setInterval(() => {
        if (totalTime <= 1) {
            setTimeout(() => {
                alert('end');
            }, 100);

            clearInterval(timerId);
            resetTimer();
           
            return;
        }

        console.log(totalTime);

        totalTime -= 1;
        $hour.value = fillZero(parseInt(totalTime / 3600));
        $minute.value = fillZero(parseInt((totalTime % 3600) / 60));
        $second.value = fillZero((totalTime % 3600) % 60);
    }, 1000);
}

function pauseTimer(event) {
    clearInterval(timerId);
    showStartBtn();
}

function resetTimer(event) {
    clearInterval(timerId);
    initializeBtns();

    $hour.value = '00';
    $minute.value = '00';
    $second.value = '00';
}

$inputs.forEach((input) => {
    input.addEventListener('input', checkNumber);
    input.addEventListener('focusout', formNumber);
});

$startBtn.addEventListener('click', startTimer);
$pauseBtn.addEventListener('click', pauseTimer);
$resetBtn.addEventListener('click', resetTimer);

document.body.querySelector('form').addEventListener('click', (event) => {
    event.preventDefault();
});

initializeBtns()