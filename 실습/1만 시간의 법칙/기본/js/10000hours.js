// js file

function isEmpty(str) {
    return !str.trim().length;
}

const calc_start = document.querySelector('#calc_start');
const user_input_job = document.querySelector('#user_input_job');
const user_input_time = document.querySelector('#user_input_time');
const user_output_job = document.querySelector('#user_output_job');
const user_output_time = document.querySelector('#user_output_time');

const calc_result = document.querySelector('.specialist_result');
const loading = document.querySelector('.loading');

calc_start.addEventListener('click', function () {
    if (!isEmpty(user_input_job.value) && !isEmpty(user_input_time.value)) {
        calc_result.style.display = "none";

        setTimeout(() => {
            user_output_job.textContent = user_input_job.value;
            user_output_time.textContent = Math.floor(10000 / parseInt(user_input_time.value));
            loading.style.display = "none";
            calc_result.style.display = "block";
        }, 2000);

        loading.style.display = "block";
    }
});

