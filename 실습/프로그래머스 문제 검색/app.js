// section
const $section = document.querySelector('.section');

// form
const $form = $section.querySelector('form');
const $userInput = $form.querySelector('input');
const $searchBtn = $form.querySelector('.searchBtn');
const $resetBtn = $form.querySelector('.resetBtn');

// difficulty buttons
const $difficultyBtnList = $section.querySelectorAll('.difficultyBtnList button');

// problem list
const $problemList = $section.querySelector('.problemList');

let problemList = {};
let totalPages = 0;

const getData = async () => {
    const response = await fetch(
        "https://school.programmers.co.kr/api/v1/school/challenges/?page=1&perPage=20&languages[]=javascript&order=acceptance_desc"
    );
    const responseResult = await response.json();
    const problems = {};
    
    for (const problem of responseResult.result) {
        nowLevelProblemList = problems[problem.level] || [];
        nowLevelProblemList.push(problem);
        problems[problem.level] = nowLevelProblemList;
    }

    const pages = responseResult.totalPages;

    return JSON.parse(pages)
}

totalPages = getData();
console.log(totalPages);

$form.addEventListener('click', (event) => {
    event.preventDefault();
})