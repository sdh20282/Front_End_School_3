import { createStore } from 'redux';

const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const number = document.getElementById("number"); // 수량
const quantity = document.getElementById("quantity"); // 페이지 하단에 총 수량
const totalPrice = document.getElementById("total"); // 페이지 하단에 총 가격

const PRICE = 17500;

// Action (정확히는 Action 생성함수)
const addNumber = () => {
    store.dispatch({type: 'ADD'})
}

// Action (정확히는 Action 생성함수)
const substractNumber = () => {
    store.dispatch({type: 'SUBSTRACT'})
}

const countReducer = (state = 0, action) => {
    switch (action.type){
        case 'ADD':
            minus.disabled = false
            return state + 1
        case 'SUBSTRACT':
            minus.disabled = false
            return state - 1
        default:
            return state
    }
}

const store = createStore(countReducer)

// let count = 0;

const hadleWrite = () => {
    console.log(store.getState())
    number.innerText = store.getState();
    quantity.innerHTML = store.getState();
    totalPrice.innerHTML = store.getState() * PRICE;
}

store.subscribe(hadleWrite)

// UI Update - text
// const updateResult = (c) => {
//     number.innerText = count;
//     quantity.innerHTML = c;
//     totalPrice.innerHTML = c * PRICE;
// };

// State Change
// const addNumber = () => {
//     count += 1;
//     minus.disabled = false;
//     updateResult(count);
// };

// State Change
// const substractNumber = () => {
//     count -= 1;
//     plus.disabled = false;
//     updateResult(count);
// };

// Init
// number.innerHTML = count;
// updateResult(count);


// Event
plus.addEventListener("click", addNumber);
minus.addEventListener("click", substractNumber);