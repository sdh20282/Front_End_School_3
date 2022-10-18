const btn_calc = document.querySelector('#btn_calc');
const btn_train = document.querySelector('#btn_train');
const btn_share = document.querySelector('#btn_share');
const btn_close = document.querySelector('#btn_close');
const result = document.querySelector('.section_result');
const user_input_job = document.querySelector('#user_input_job');
const user_input_time = document.querySelector('#user_input_time');
const user_output_job = document.querySelector('#user_output_job');
const user_output_time = document.querySelector('#user_output_time');
const loading = document.querySelector('.loading');
const modal = document.querySelector('#section_modal');

function isEmpty(str) {
    return !str.trim().length;
}

function showResult() {
    result.style.display = "block";
}

function closeResult() {
    result.style.display = "none";
}

function showLoading() {
    loading.style.display = "block";
}

function closeLoading() {
    loading.style.display = "none";
}

function showModal() {
    modal.style.display = "block";
}

function closeModal() {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        closeModal();
    }
};

function calcStart() {
    if (!isEmpty(user_input_job.value) && !isEmpty(user_input_time.value)) {
        closeResult();

        setTimeout(() => {
            showResult();
            user_output_job.textContent = user_input_job.value;
            user_output_time.textContent = Math.floor(10000 / parseInt(user_input_time.value));
            closeLoading();

        }, 2000);

        showLoading();
    }
}

function copyUrl() {
    let url = navigator.clipboard.writeText(window.location.href);
    alert("URL이 복사되었습니다");
}

btn_calc.addEventListener('click', calcStart);
btn_train.addEventListener('click', showModal);
btn_share.addEventListener('click', copyUrl);
btn_close.addEventListener('click', closeModal);
