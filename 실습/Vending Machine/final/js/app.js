// 접근성
const main = document.querySelector('main');
const left_side = main.querySelector('.left_side');
const left_side_form = left_side.querySelector('form');
const right_side = main.querySelector('.right_side');

left_side_form.addEventListener('click', (event) => {
    event.preventDefault();
});

// 입금, 거스름돈 반환
const total_amount = right_side.querySelector('.total_amount .money_info');
const deposit = left_side_form.querySelector('.deposit');
const deposit_button = left_side_form.querySelector('.deposit_button');
const balance = left_side_form.querySelector('.balance_change .money_info');
const change_button = left_side_form.querySelector('.change_button');

function addComma(num) {
    return num.toString().split('').reverse().map((value, index) => index % 3 === 0 && index !== 0 ? value + ',' : value).reverse().join('');
}

function deleteComma(str) {
    return str.split(',').join('');
}

function insertMoney(event) {
    if (!deposit.value.trim().length) {
        alert('금액을 입력해주세요!');
        return;
    }

    let total = parseInt(deleteComma(total_amount.textContent));
    let insert = parseFloat(deposit.value);

    if (insert <= 0) {
        alert('0 보다 큰 금액을 입력해주세요!');
        return;
    }

    if (insert > total) {
        alert('소지금보다 적은 금액을 입력해주세요!');
        return;
    }

    if (insert % 1) {
        alert('1보다 작은 금액은 버려집니다!');
        insert = Math.floor(insert);
    }

    total_amount.textContent = addComma(total - insert);
    deposit.value = null;
    balance.textContent = addComma(insert + parseInt(deleteComma(balance.textContent)));
}

function changeMoney(event) {
    let total = parseInt(deleteComma(total_amount.textContent));
    let change = parseInt(deleteComma(balance.textContent));

    total_amount.textContent = addComma(total + change);
    balance.textContent = 0;
}

deposit_button.addEventListener('click', insertMoney);
change_button.addEventListener('click', changeMoney);

// 상품
const productButtons = left_side.querySelectorAll('.product_list .product');
const listToPurchase = left_side_form.querySelectorAll('.to_purchase input')
const shoppingCartToPurchase = left_side_form.querySelector('.shopping_cart');
const getButton = left_side_form.querySelector('.buy_product_button');

const shoppingCartPurchased = right_side.querySelector('.purchased_products .shopping_cart');
const listPurchased = right_side.querySelectorAll('.purchased_products input');
const total_price = right_side.querySelector('.purchased_products .money_info')

function getListItem(item) {
    const listItem = document.createElement('li');
    const figure = document.createElement('figure');
    const img = document.createElement('img');
    const figcaption = document.createElement('figcaption');
    const desc = document.createElement('p');
    const count = document.createElement('p');

    listItem.classList.add('selected_product', 'border_5px');
    listItem.appendChild(figure);
    figure.classList.add('selected_product_image');
    figure.appendChild(img);
    figure.appendChild(figcaption);
    img.setAttribute('src', `./images/${item.dataset.name}.png`);
    img.setAttribute('alt', `음료 이미지입니다.`);
    figcaption.appendChild(desc);
    desc.classList.add('product_name');
    desc.textContent = item.dataset.name;
    listItem.appendChild(count);
    count.classList.add('selected_product_count', 'light_gray_normal_border', 'border_5px');
    count.textContent = item.value;

    return listItem;
}

function updateToPurchase() {
    const fragment = new DocumentFragment()
    shoppingCartToPurchase.innerHTML = '';

    for (const item of listToPurchase) {
        if (parseInt(item.value)) {
            fragment.appendChild(getListItem(item));
        }
    };

    shoppingCartToPurchase.appendChild(fragment);
}

function putProduct(event) {
    if (this.dataset.stock === '0') {
        alert('품절된 상품은 선택할 수 없습니다!');
        return;
    }

    const price = parseInt(this.querySelector('.product_price').textContent);
    let change = parseInt(deleteComma(balance.textContent));

    if (change < price) {
        alert('잔액이 부족합니다!');
        return;
    }

    this.classList.add('selected');
    this.dataset.stock -= 1;
    balance.textContent = addComma(change - price);

    const index = Array.prototype.indexOf.call(productButtons, this);
    listToPurchase[index].value = parseInt(listToPurchase[index].value) + 1;

    if (this.dataset.stock === '0') {
        this.classList.add('sold_out')
    }

    updateToPurchase()
}

function updatePurchased() {
    const fragment = new DocumentFragment()
    shoppingCartPurchased.innerHTML = '';

    for (const item of listPurchased) {
        if (parseInt(item.value)) {
            fragment.appendChild(getListItem(item));
        }
    };

    shoppingCartPurchased.appendChild(fragment);
}

function getProduct(event) {
    for (const item of productButtons) {
        item.classList.remove('selected');
    }

    for (let index = 0; index < listToPurchase.length; index++) {
        if (!(listToPurchase[index].value === '0')) {
            listPurchased[index].value = parseInt(listPurchased[index].value) + parseInt(listToPurchase[index].value);
        }

        listToPurchase[index].value = 0;
    }

    updateToPurchase();
    updatePurchased();

    let sum = 0;

    for (const item of listPurchased) {
        sum += parseInt(item.value) * parseInt(item.dataset.price);
    }

    total_price.textContent = addComma(sum);
}

Array.prototype.map.call(productButtons, (item) => {
    item.addEventListener('click', putProduct);
});
getButton.addEventListener('click', getProduct);