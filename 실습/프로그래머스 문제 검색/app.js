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

const problemList = {};
const problemSelected = [];
const problemToShow = [];

async function getProblemData() {
    try {
        const problemData = [];
        let nowPage = 1;
        let totalPages = 0;

        do {
            const response = await fetch(
                `https://school.programmers.co.kr/api/v1/school/challenges/?page=${nowPage}&perPage=20&languages[]=javascript&order=acceptance_desc`
            );
            const responseResult = await response.json();

            problemData.push(...responseResult.result);

            nowPage += 1;
            totalPages = responseResult.totalPages;
        } while (nowPage <= totalPages);

        return problemData;
    } catch (error) {
        alert(error);
    }
}

function initProblemList(data) {
    for (const problem of data) {
        nowLevelProblemList = problemList[problem.level] || [];
        nowLevelProblemList.push(problem);
        problemList[problem.level] = nowLevelProblemList;
    }
}

function initProblemToShow() {
    for (const key in problemList) {
        const problems = problemList[key];

        problemToShow.push(...problems);
        problemSelected.push(...problems);
    }

    displayProblems();
}

function updateProblemToShow() {
    problemSelected.length = 0;
    problemToShow.length = 0;
    let existSelected = false;

    $difficultyBtnList.forEach((button, index) => {
        if (button.classList.contains('selected')) {
            problemSelected.push(...problemList[index]);
            existSelected = true;
        }
    });

    if (!existSelected) {
        initProblemToShow();

        for (const key in problemList) {
            const problems = problemList[key];
    
            problemToShow.push(...problems);
        }
    } else {
        problemToShow.push(...problemSelected);
        displayProblems();
    }
}

function displayProblems() {
    $problemList.innerHTML = '';
    const fragment = new DocumentFragment();

    for (const problem of problemToShow) {
        fragment.appendChild(createListItem(problem));
    }

    $problemList.appendChild(fragment);
}

function createListItem(problem) {
    const liItem = document.createElement('li');
    const link = document.createElement('a');
    const title = document.createElement('p');
    const partTitle = document.createElement('span');
    const level = document.createElement('p');

    liItem.classList.add('problem');
    liItem.appendChild(link);

    link.setAttribute('href', `https://school.programmers.co.kr/learn/courses/30/lessons/${problem.id}`)
    link.setAttribute('target', '_blank');
    link.appendChild(title);
    link.appendChild(level);

    title.classList.add('title');
    title.textContent = problem.title;
    title.appendChild(partTitle);

    partTitle.classList.add('partTitle');
    partTitle.textContent = problem.partTitle;

    level.textContent = `Lv. ${problem.level}`;

    return liItem;
}

function searchProblem() {
    if ($userInput.value.trim().length == 0) {
        updateProblemToShow();
    } else {
        problemToShow.length = 0;

        const searchValue = new RegExp($userInput.value);
        problemToShow.push(...problemSelected.filter((problem) => searchValue.test(problem.title)));

        displayProblems();
    }
}

getProblemData()
    .then((problemData) => {
        initProblemList(problemData);
    }).then(() => {
        initProblemToShow();
    });

$userInput.addEventListener('input', function (event) {
    searchProblem();
});

// level select buttons
$difficultyBtnList.forEach((button) => {
    button.addEventListener('click', function (event) {
        this.classList.toggle('selected');
        updateProblemToShow();
        searchProblem();
    });
});

// clear input
$resetBtn.addEventListener('click', (event) => {
    $userInput.value = '';
    initProblemToShow();
    displayProblems();
});

// remove default form action
$form.addEventListener('click', (event) => {
    event.preventDefault();
});